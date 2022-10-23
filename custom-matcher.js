const Calculator = require("./simple-calculator");

const customMatcher = {
  toBeCalculator: () => {
    return {
      compare: (actual, expected) => {
        const result = {
          pass: false,
          message: `expected ${actual} to be instance of Calculator`,
        };

        if (actual instanceof Calculator) result.pass = true;
        return result;
      },
    };
  },
};

exports.CustomMatcher = customMatcher;
