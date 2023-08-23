
import { useState } from "react"

import { Tabs } from "@/components"
import { tasksTabs } from "@/configs"

import styles from '@/styles/tasks.module.scss';


const TasksPage = ({tabs}) => 
{
    const [currentTab, setCurrentTab] = useState(tasksTabs[0]);



    return (<div className={styles.container}>
    
    <h2>Tasks</h2>
<Tabs tabs={tasksTabs} />
    </div>)
}

export default TasksPage