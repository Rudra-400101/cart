import React from 'react'

class AddItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productName: "",
            price: "",
        }
    }
    state = {}
    render() {
        return (
            <>
                <form onSubmit={(e) =>{
                e.preventDefault()
                 this.props.addItem(this.state.productName,this.state.price,this.state.quantity)}
            
                 }
                 >
                    <input className="form-control form-control-lg mt-2" type="text" placeholder="Enter product name" aria-label=".form-control-lg example" name="productName" onChange={(e)=>{
                        this.setState({productName: e.currentTarget.value});
                    }}/>
                    <input className="form-control mt-2" type="number" placeholder="price" aria-label="default input example" name='price' onChange={(e)=>{
                        this.setState({price: Number(e.currentTarget.value)});
                    }}/>
                    <button type="submit" className="btn btn-primary mb-3 mt-2">Upload</button>
                </form>
            </>
        )
    }
}

export default AddItem;