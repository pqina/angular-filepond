import { writeFile } from 'fs';
import { getPackages } from './utils';

async function main() {
  const filepondJson = require('../package.json');
  const keysToCopy = ['version', 'repository', 'keywords', 'author', 'contributors', 'license', 'bugs', 'homepage'];

  const packages = getPackages();
  for (const pack of packages) {
    const packPath = `${pack.buildPath}/package.json`;
    const packPackage = require(packPath);

    // copy all meta data from the root package.json into all packages
    for (const key of keysToCopy) {
      packPackage[key] = filepondJson[key];
    }

    // set all the packages peerDependencies to be the same as root package.json version
    for (const p of packages) {
      if (packPackage.peerDependencies[p.packageName]) {
        packPackage.peerDependencies[p.packageName] = filepondJson.version;
      }
    }

    // save the package file after we have updated the keys and peerDependencies
    await writeFile(packPath, JSON.stringify(packPackage, null, 2), err => {
      if (err) {
        console.error('Write failed!');
      }
    });
  }

  console.log(`package version set to ${filepondJson.version}`);
}

main();
