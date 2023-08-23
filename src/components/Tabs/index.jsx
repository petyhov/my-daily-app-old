
import styles from "./styles.module.scss";

const Tabs = ({tabs}) => 

{
    console.log(tabs)



    return <ul className={styles.list}>
        {tabs.map(tab => <li>{tab}</li>)}
    </ul>


}

export default Tabs