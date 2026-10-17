const TONES = {
  note: 'tip',
  abstract: 'tip',
  info: 'tip',
  tip: 'tip',
  success: 'success',
  question: 'success',
  warning: 'warning',
  failure: 'danger',
  danger: 'danger',
  bug: 'danger',
  example: 'brand',
  quote: 'info',
};

const SYNTAX = /^([!?]{3})([+-]?)\s*([A-Za-z][\w-]*)(?:\s+(.*?))?\s*$/;

function parseTitle(rest) {
  if (!rest) return undefined;
  const quoted = rest.match(/^"([^"]*)"$/) ?? rest.match(/^'([^']*)'$/);
  return quoted ? quoted[1] : rest;
}

export default function mkdocsAdmonitions(md) {
  function admonition(state, startLine, endLine, silent) {
    if (state.sCount[startLine] - state.blkIndent >= 4) return false;

    const pos = state.bMarks[startLine] + state.tShift[startLine];
    const max = state.eMarks[startLine];
    if (pos + 3 > max) return false;

    const match = SYNTAX.exec(state.src.slice(pos, max));
    if (!match) return false;

    const [, marker, sign, rawType] = match;
    if (marker === '!!!' && sign) return false;
    if (marker === '???' && sign && sign !== '+' && sign !== '-') return false;

    if (silent) return true;

    const collapsible = marker === '???';
    const expanded = sign === '+';
    const type = rawType.toLowerCase();
    const title = parseTitle((match[4] ?? '').trim());
    const indent = state.sCount[startLine];

    let nextLine = startLine + 1;
    while (nextLine < endLine) {
      if (!state.isEmpty(nextLine) && state.sCount[nextLine] < indent + 4) break;
      nextLine++;
    }
    while (nextLine > startLine + 1 && state.isEmpty(nextLine - 1)) nextLine--;

    const tone = TONES[type] ?? 'tip';
    const classes = `custom-block ${tone} admonition admonition-${type}`;

    const label = title === undefined ? type.charAt(0).toUpperCase() + type.slice(1) : title;
    const titleHtml = label ? md.renderInline(label, state.env) : '';

    const open = state.push('html_block', '', 0);
    open.map = [startLine, nextLine];
    if (collapsible) {
      open.content = `<details class="${classes}"${expanded ? ' open' : ''}><summary class="custom-block-title">${titleHtml || label}</summary>\n`;
    } else {
      open.content = `<div class="${classes}">${titleHtml ? `<p class="custom-block-title">${titleHtml}</p>` : ''}\n`;
    }

    const previousIndent = state.blkIndent;
    const previousParent = state.parentType;
    const previousLineMax = state.lineMax;
    state.blkIndent = indent + 4;
    state.parentType = 'admonition';
    state.lineMax = nextLine;
    md.block.tokenize(state, startLine + 1, nextLine);
    state.blkIndent = previousIndent;
    state.parentType = previousParent;
    state.lineMax = previousLineMax;

    const close = state.push('html_block', '', 0);
    close.content = collapsible ? '</details>\n' : '</div>\n';

    state.line = nextLine;
    return true;
  }

  md.block.ruler.before('fence', 'mkdocs_admonition', admonition, {
    alt: ['paragraph', 'reference', 'blockquote', 'list'],
  });
}
