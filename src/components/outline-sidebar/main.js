import './style.css';

class OutlineSidebar{
    constructor(sections = [], keywords = []){
        this.sections = sections;
        this.keywords = keywords;
        this.update();
    }
    createOutlineSection(sectionName = ""){
        const formattedSectionName = sectionName.toLowerCase();
        //Initialize sections
        const container = document.createElement('div');
        container.classList.add(`outline-sidebar-${formattedSectionName}`);

        //Initialize sections heading
        const heading = document.createElement('h2');
        heading.innerText = formattedSectionName;
        heading.classList.add(`outline-sidebar-${formattedSectionName}-heading`);
        //Append heading to parent
        container.appendChild(heading)
        

        //Initialize sections list
        const list = document.createElement('ul');
        list.classList.add(`outline-sidebar-${formattedSectionName}-list`);

        //Initialize sections list items
        this[sectionName]?.map((el) => {
            const listItem = document.createElement('li');
            listItem.innerText = el;
            listItem.classList.add(`outline-sidebar-${formattedSectionName}-list-item`);

            //Append to parent
            list.appendChild(listItem);
        })

        //Append list to parent
        container.appendChild(list)

        return container
    }
    
    update(){
        //Initialize container
        const container = document.createElement('div');
        container.classList.add('outline-sidebar-wrapper');

        //append the "sections" outlineSection
        container.appendChild(this.createOutlineSection("sections"))
        //append the "keywords" outlineSection
        container.appendChild(this.createOutlineSection("keywords"))

        document.body.appendChild(container)
        
    }
}

export default OutlineSidebar;
