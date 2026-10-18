import { readFileSync, writeFileSync } from 'node:fs';

const calc = () => {
    const nowDate = new Date();
    const startDate = new Date('2017-11-01T00:00:00Z');

    let years = nowDate.getUTCFullYear() - startDate.getUTCFullYear();
    let months = nowDate.getUTCMonth() - startDate.getUTCMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    return months
        ? `${years} years ${months} months`
        : `${years} years`;
}

const readme = readFileSync('README.md', 'utf8');

const updated = readme.replace(
  /<!-- EXPERIENCE:START -->[\s\S]*?<!-- EXPERIENCE:END -->/,
  `<!-- EXPERIENCE:START -->\n${calc()} of experience\n<!-- EXPERIENCE:END -->`
);

writeFileSync('README.md', updated);