

const InfoInner = (props) => {

    const { productTitle, productDescription } = props;

    return (
        <div className="info right">
            <div className="inner">
                <span>i</span>
                <h1>{productTitle}</h1>
                <p>{productDescription}</p>
            </div>
        </div>
    )
}

export { InfoInner }