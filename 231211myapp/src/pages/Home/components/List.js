import Item from "./Item";

const List = ({listData, setData}) => {


    // const data = [1, 2, 3]

    return <div className="list">
        {listData.map((item) => {
            console.log(item)
            return <Item key={item.id} itemData={item} setData={setData}/>
        })}
    </div>
}

export default List;