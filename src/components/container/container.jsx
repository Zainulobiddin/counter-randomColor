export default function Container(props) {
    return (
        <div style={{maxWidth: '1200px', margin: 'auto'}}>
            {props.children}
        </div>
    )
}