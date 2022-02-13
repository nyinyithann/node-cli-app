#!/usr/bin/env node

import {program} from 'commander';
import clc from "cli-color";

program
    .requiredOption("-n, --name <char>", "Your name, please")
    .parse()

const options = program.opts();

const qColor = clc.yellowBright.bgBlack;
const aColor = clc.magenta.bgBlack;

console.log(`${qColor("Mingalaba")}, ${aColor(options.name)}`);

