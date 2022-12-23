import axios from "axios";
import React , {Component} from "react";
const Context=React.createContext();
export class Provider extends Component{
    handler=(action, newObject)=>{
        switch(action){
            case "ADD_PROJECT":
                this.setState({
                    projects: [newObject, ...this.state.projects],
                });
                break;
            case "ADD_BLOG":
                    this.setState({
                        blogs:[newObject, ...this.state.blogs],
                    });
                break;
            case "ADD_RECOMMENDATION":
                this.setState({
                    recommendations:[newObject, ...this.state.recommendations],
                });
                break;




        }
        
    };
    state={
        handler:this.handler,
        recommendations : [{
            id:1,
            name:"Random guy1",
            company:"ABC Company",
            designation:"CEO",
            message:"randomemail1@gmail.comjbjbmbmbmnbmnmnmnmnmnmnmnmnmnmnmnmnmnmnmnm",
        },
        {
            id:2,
            name:"Random guy2",
            company:"ABC Company",
            designation:"Director",
            message:"randomemail2@gmail.com",
        },

        {
            id:3,
            name:"Random guy3",
            company:"ABC Company",
            designation:"Manager",
            message:"randomemail3@gmail.com",
        },
        {
            id:4,
            name:"Random guy4",
            company:"ABC Company",
            designation:"SDE",
            message:"randomemail4@gmail.com",
        },

        ],
        
        blogs :[
            {
                id:1,
                title:"Blog1",
                imageUrl:"https://drive.google.com/file/d/1WRDXRSGllx8ytZWjW-DgdJFYECX_cypX/view?usp=sharing",
                excerpt: "This blog is all about pose estimation",
                
            },
            {
                id:2,
                title:"Blog2",
                imageUrl:"https://drive.google.com/file/d/1Z3p3i4T1AmUMjcSAQzKWiyPArF9Ze1p7/view?usp=sharing",
                excerpt: "This blog is all about...",
            },
            {
                id:3,
                title:"Blog3",
                imageUrl:"https://drive.google.com/file/d/1R53Ky6Zr2XB6xv9WuqD3E6LOjDTNiEY7/view?usp=sharing",
                excerpt: "This blog is all about...",
            },
        ],
        

    skills:[{
            id:1,
            name:"OIP",
            imageUrl:"https://hello.jpg",
            starsTotal:3,
            starsActive:3,
        },
    {
        id:2,
        name:"CSS",
        imageUrl:"https://hello.jpg",
        starsTotal:3,
        starsActive:3,  
    },
    {
        id:3,
        name:"BOOT",
        imageUrl:"https://hello.jpg",
        starsTotal:3,
        starsActive:2,
    },
    {
        id:4,
        name:"JAVA",
        imageUrl:"https://hello.jpg",
        starsTotal:3,
        starsActive:1,
    },
    {
        id:5,
        name:"PYTHON",
        imageUrl:"https://hello.jpg",
        starsTotal:3,
        starsActive:3,
    },
    {
        id:6,
        name:"C",
        imageUrl:"https://hello.jpg",
        starsTotal:3,
        starsActive:2,
    },
    {
        id:7,
        name:"MySql",
        imageUrl:"https://hello.jpg",
        starsTotal:3,
        starsActive:3,
    },
    {
        id:8,
        name:"R",
        imageUrl:"https://hello.jpg",
        starsTotal:3,
        starsActive:2,
    },
    ], 
        projects :[
            {
                id:1,
                title:"Project1",
                imageUrl:"https://drive.google.com/file/d/1WRDXRSGllx8ytZWjW-DgdJFYECX_cypX/view?usp=sharing",
                excerpt: "This is my project about Java development",
                body:"Body 1",
                
            },
            {
                id:2,
                title:"Project2",
                imageUrl:"https://drive.google.com/file/d/1Z3p3i4T1AmUMjcSAQzKWiyPArF9Ze1p7/view?usp=sharing",
                excerpt: "This is the minor project about the full stack static website",
                body:"Body 2",
            },
            {
                id:3,
                title:"Project3",
                imageUrl:"https://drive.google.com/file/d/1R53Ky6Zr2XB6xv9WuqD3E6LOjDTNiEY7/view?usp=sharing",
                excerpt: "This is the project upon AI based pose estimation",
                body:"Body 3",
            },
            {
                id:4,
                title:"Project4",
                imageUrl:"https://drive.google.com/file/d/1R53Ky6Zr2XB6xv9WuqD3E6LOjDTNiEY7/view?usp=sharing",
                excerpt: "This is the project is about to upload",
                body:"Body 4",
            },
        ]
    };

    async componentDidMount(){
        const [responseRecommendations,responseSkills,responseProjects,responseBlogs]=Promise.all([
            axios.get("http://127.0.0.1:5000/api/recommendations"),
            axios.get("http://127.0.0.1:5000/api/skills"),
            axios.get("http://127.0.0.1:5000/api/projects"),
            axios.get("http://127.0.0.1:5000/api/blogs"),

        ]);
        const newState={};
        if(responseRecommendations.data.isSuccessful && responseRecommendations.data.results.length!==0){
            newState.recommendations=responseRecommendations.data.results;
        }
        if(responseSkills.data.isSuccessful && responseSkills.data.results.length!==0){
            newState.skills=responseSkills.data.results;
        }
        if(responseProjects.data.isSuccessful && responseProjects.data.results.length!==0){
            newState.projects=responseProjects.data.results;
        }
        if(responseBlogs.data.isSuccessful && responseBlogs.data.results.length!==0){
            newState.blogs=responseBlogs.data.results;
        }
        this.setState(newState);
        // let response=await axios.get("http://127.0.0.1:5000/api/recommendations");
        // if(response.data.isSuccessful){
        //     this.setState({
        //         recommendations: response.data.results,
        //     });
        // }

        // response=await axios.get("http://127.0.0.1:5000/api/skills");
        // if(response.data.isSuccessful && response.data.results.length!=0){
        //     this.setState({
        //         skills: response.data.results,
        //     });
        // }
        // response=await axios.get("http://127.0.0.1:5000/api/projects");
        // if(response.data.isSuccessful && response.data.results.length!=0){
        //     this.setState({
        //         projects: response.data.results,
        //     });
        // }

        // response=await axios.get("http://127.0.0.1:5000/api/blogs");
        // if(response.data.isSuccessful && response.data.results.length!=0){
        //     this.setState({
        //         blogs: response.data.results,
        //     });
        // }
    }
    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}
export const Consumer=Context.Consumer;