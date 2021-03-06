import { Schema } from "jsonschema";

const quizSchema: Schema = {
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  properties: {
    catagories: {
      type: "array",
      minItems: 1,
      items: [
        {
          type: "object",
          properties: {
            name: {
              type: "string",
            },
            questions: {
              type: "array",
              minItems: 1,
              items: [
                {
                  type: "object",
                  properties: {
                    text: {
                      type: "string",
                    },
                    answers: {
                      type: "array",
                      minItems: 2,
                      items: [
                        {
                          type: "object",
                          properties: {
                            text: {
                              type: "string",
                            },
                          },
                          required: ["text"],
                        },
                        {
                          type: "object",
                          properties: {
                            text: {
                              type: "string",
                            },
                            correct: {
                              type: "boolean",
                            },
                          },
                          required: ["text"],
                        },
                      ],
                    },
                  },
                  required: ["text", "answers"],
                },
              ],
            },
          },
          required: ["name", "questions"],
        },
      ],
    },
  },
  required: ["catagories"],
};

export default quizSchema;
