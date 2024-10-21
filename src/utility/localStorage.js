import cyrb53 from "./hashing.js";
class LocalStorageHandler{
    committifyHash = cyrb53("committify")
    constructor(){
        if (!this.getConfig()){
            this.setConfig();
        }
        else{
            this.appConfig = this.getConfig();
        }
    }

    //getters
    getSections(){
        return this.appConfig.sections
    }
    getKeywords(){
        return this.appConfig.keywords
    }

    //local storage manipulation methods
    getConfig(key = this.committifyHash){
        const storageItem = window.localStorage.getItem(key);
        if (storageItem){
            return JSON.parse(storageItem)
        }
        else{
            return undefined
        }
    }

    setConfig(key = this.committifyHash, configOptions = {}){
        //If the options are empty populate the default ones
        if (Object.entries(configOptions).length === 0){
            //Set the default values
            configOptions["sections"] = ["title", "body"]
            configOptions["keywords"] = ["fix", "feat","style","chore","refactor","docs","test","perf","ci","build","revert"]
        }
        //in any case save them
        this.saveConfig(configOptions);
    }

    saveConfig(config = {}){
            this.appConfig = config;
            window.localStorage.setItem(this.committifyHash, JSON.stringify(config));
    }
}
export default LocalStorageHandler;
