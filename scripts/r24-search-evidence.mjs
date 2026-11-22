// A transport success is not a relevance verdict. Keep both outcomes explicit.
export function assessR24Destination({base,selected,actual,http,h1Count,allowedPaths}) {
  const expected = new URL(selected,base);
  const destination = new URL(actual,base);
  const navigationPassed = http === 200 && h1Count === 1 && destination.href === expected.href;
  const relevancePassed = destination.origin === new URL(base).origin && allowedPaths.includes(destination.pathname);
  return {navigationPassed,relevancePassed,passed:navigationPassed && relevancePassed};
}
