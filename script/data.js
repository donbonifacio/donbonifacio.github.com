(function(context) {
    
    var msStack = ["C#", ".NET"]
    var msWebStack = _.union(msStack, ["ASP.NET"]);

    var frontEndStack = ["HTML", "CSS", "Javascript"];

    context.psantosData = {
        projects: [
                {
                    name: "Orion's Belt",
                    description: "",
                    year: 2006,
                    techs: _.union(msWebStack, frontEndStack, ["MySQL", "MS SQL Server"]),
                    area: ["GameDev"]
                }
            ]
    };
    
})(window);