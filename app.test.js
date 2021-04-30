const fileName = "test.txt"
jest.mock('fs');

describe("Create a text file", () => {
    test("File created successfully", () => {
     
      const app = require('./app');
      let fileManager = new app.FileManager(fileName);

      require('fs').__setMockFile("test.txt");

      expect(fileManager.create()).toBe(true); 
    });

    test("File not created successfully", () => {
     
      const app = require('./app');
      let fileManager = new app.FileManager(fileName);

      require('fs').__setMockFile("");

      expect(fileManager.create()).toBe(false); 
    });
  });
  