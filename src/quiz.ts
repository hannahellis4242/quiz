import { Command } from "commander";

const program = new Command("quiz")
  .description("small command line quiz tool")
  .version("0.0.1")
  .argument("<input>", "Input file for quiz questions")
  .action((input) => {
    console.log(input);
  });

program.parse();
