import React, { useEffect, useState } from 'react'
import Cart from './Cart'
const getitem = () => {
    let savedata = localStorage.getItem('savedata');
    if (savedata) {
        // return the parsed the JSON object back to a javascript object
        return JSON.parse(savedata);
        // otherwise
    } else {
        // return an empty array
        return [];
    }

}
function Form({ set, change }) {
    const [savedata, setsavedata] = useState(getitem());
    const [title, settitle] = useState('');
    const [mess, setmess] = useState("");

    const handleEditClick = (text, message) => {
        const filteredititem = savedata.filter((item) => item.title !== text);
        const filtermess = savedata.filter((item) => item.mess !== message)
        const selectetitle = savedata.find((item) => item.title === text);
        const selectemess = savedata.find((item) => item.mess === mess);
        setsavedata(filteredititem);
        setsavedata(filtermess);
        settitle(selectetitle.title);
        setmess(selectemess.mess);
    }




    useEffect(function () {
        localStorage.setItem("savedata", JSON.stringify(savedata));
    }, [savedata]);

    function data(e) {
        if (title === '') {
            alert("please fill all form before save!");
        } else {
            e.preventDefault();
            const array = { title: title, mess: mess }; //id:new Date().getTime().toString(),
            setsavedata([...savedata, array]);
        }
    }


    const clearall = () => {
        if (savedata.length === 0) {
            alert("All Cart Alerady Remove");
        } else {
            // alert("Are Your Sure Want To Clear All Data!")
            setsavedata([]);
        }
    }

    const removeFromoCart = (dataToRemove) => {
        setsavedata(savedata.filter((savedata) => savedata !== dataToRemove))
    }

    return (
        <>
            <div className="form"  >
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Enter Your Title</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" value={title} onChange={(e) => settitle(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={mess} onChange={(e) => setmess(e.target.value)}></textarea>
                </div>
                <div style={{ display: 'flex', alignItems: "center", justifyContent: "space-around" }}>
                    <button class="btn btn-primary text-center" type="submit" onClick={data}>SUBMIT</button>
                </div>
            </div>
            {
                savedata.length === 0 ? (<p style={{ display: 'flex', alignItems: "center", justifyContent: "space-around", marginTop: '20px'}}>CURRENTLY NO DATA ADDED</p>) : (<a href="/" class="btn btn-primary" style={{ marginLeft: "20px" }} onClick={clearall}>Remove All</a>)
            }
            {
                // eslint-disable-next-line array-callback-return
                savedata.filter((val, index) => {
                    if (set === "") {
                        return val;
                    } else if (val.title.toLowerCase().includes(set.toLowerCase())) {
                        return val;
                    }
                })
                    .map((item, index) => {
                        return <Cart
                            key={index}
                            title={item.title}
                            mess={item.mess}
                            removeFromoCart={() => removeFromoCart(item)}
                            handleEditClick={() => handleEditClick(item.title, item.mess)}
                        />
                    })
            }
        </>
    );
};
export default Form;