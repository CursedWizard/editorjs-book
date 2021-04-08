
import fs from "fs"
import path from 'path'
import Datastore from 'nedb'

class Database {

  private structure: Nedb<any>;
  private appFolder: string;

  constructor(appFolder: string) {
    this.appFolder = appFolder;
    this.structure = new Datastore({ filename: path.join(this.appFolder, 'user.db'), autoload: true});
  }

  refresh() {
    this.structure = new Datastore({ filename: path.join(this.appFolder, 'user.db'), autoload: true});
    // this.structure = new Datastore({ filename: path.join(this.appFolder, 'user.db'), autoload: true});

  }

}
