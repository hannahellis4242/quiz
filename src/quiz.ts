import { Command } from "commander";

const program = new Command("quiz")

  .description("small command line quiz tool")
  .version("0.0.1")
  .enablePositionalOptions()
  .requiredOption("-f", "Input file for quiz questions");

program.parse();
