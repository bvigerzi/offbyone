# Plan: Mobile title wrapping with break-word

## Goal

Use `overflow-wrap: break-word` on the "unstructured" title so it wraps across
multiple lines on narrow screens without hyphens, creating an artistic multi-line
split. This preserves the large 8rem typography on mobile instead of scaling it down.

## Changes (ShrinkingTitle.astro)

On the `<a id="shrinking-link">` inline style:

1. **Remove** `white-space: nowrap`
2. **Add** `overflow-wrap: break-word` — break the word across lines, no hyphens
3. **Add** `text-align: center` — center the wrapped lines
4. **Add** `max-width: 100%; padding: 0 1.5rem; box-sizing: border-box` — constrain to viewport
5. **Add** `line-height: 1` — tighten spacing between wrapped lines at large sizes

No JS changes needed — the scroll handler still animates font-size and wrapping
resolves naturally as the text shrinks.

## Issues from first attempt (2026-03-15)

- Didn't look right on mobile — needs iteration on exact styling
- Reverted in favor of `clamp(2.5rem, 10vw, 8rem)` viewport-scaling approach for launch

## Open questions

- What line-height value looks best for the wrapped state?
- Should padding/max-width be adjusted differently?
- Does the header height need to increase to accommodate two lines on mobile?
- Consider a media query approach: keep `nowrap` + `8rem` on desktop, only apply
  break-word styles below a breakpoint
