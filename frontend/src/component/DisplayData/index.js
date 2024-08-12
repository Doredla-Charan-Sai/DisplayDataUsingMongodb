import {Component} from "react"

class DisplayData extends Component{
    state = {data:{}}
    componentDidMount() {
        this.getData();
    }
    getData = async () => {
        try {
            const response = await fetch("/api/data");
            console.log("Data fetching",response);
            const jsonData = await response.json();
            console.log("Data received:", jsonData);
            this.setState({ data: jsonData }); 
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };
    
    render(){
        const {data} = this.state;
        return(
            <div>
                <h1>
                    Hello World!!!!
                </h1>
                <p>{JSON.stringify(data, null, 2)}</p>
            </div>
        )
    }
};

export default DisplayData;