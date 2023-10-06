import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUserTasks, updateUserTask, getUserTasksData } from '@/redux';
import { Tabs, UserTaskItem, AddButton } from '@/components';
import { tasksTabs } from '@/configs';
import { WithLoader } from '@/hocs';
import { AddUserTaskModal } from '@/modals';

import styles from '@/styles/tasks.module.scss';

const TasksPage = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const { tasks, isLoading, isError } = useSelector(getUserTasksData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!tasks.length) {
      dispatch(fetchUserTasks());
    }
  }, [dispatch, tasks]);

  const modalHandler = () => {
    return setShowAddModal(showAddModal);
  };

  const currentTasks = () => {
    if (currentTab === 1) {
      return tasks.filter((item) => !item.isDone);
    }
    if (currentTab === 2) {
      return tasks.filter((item) => item.isDone);
    }
    return tasks;
  };

  const taskHandler = (item) => {
    const { _id, isDone } = item;
    dispatch(updateUserTask({ _id, value: !isDone }));
  };

  return (
    <div className={styles.container}>
      <WithLoader isLoading={isLoading}>
        <Tabs
          tabs={tasksTabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <ul>
          {currentTasks().map((item) => (
            <UserTaskItem
              key={item._id}
              item={item}
              taskHandler={taskHandler}
            />
          ))}
        </ul>
        <AddButton btnAction={modalHandler} />
      </WithLoader>
      {false && <AddUserTaskModal modalHandler={modalHandler} />}
    </div>
  );
};

export default TasksPage;
