const Item = ({itemData, setData}) => {

    const{id, note, date, time} = itemData;
    function delItem(){
        setData(function(prev){
            console.log(prev, 'prev')
            return prev.filter((item) => {
                console.log(item.id)
                return item.id != id
            })
        })
    }

    return <div className="item">
        <div>{note}</div>
        <div>{date}</div>
        <div>{time}</div>
        <button type="button" className="remove" onClick={delItem}>刪除</button>
    </div>
}

export default Item;