export const List = ({ ele, addTocart, removeFromcart, isExist, removeProduct }) => {
    return (
        <tr>
            <td className="fw-semibold">{ele}</td>

            <td>
                {isExist ? (<button className="btn btn-danger" onClick={() => removeFromcart(ele)}>
                        Remove
                    </button>
                ) : (<button className="btn btn-success" onClick={() => addTocart(ele)}>
                        Buy
                    </button>
                )}
            </td>

            <td>
                <button className="btn btn-danger" onClick={(e) => removeProduct(ele)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}