export const BREAKPOINTS = [576, 768, 992, 1200];

const MQ = BREAKPOINTS.map((bp) => `@media (min-width: ${bp}px)`);

export default MQ;
