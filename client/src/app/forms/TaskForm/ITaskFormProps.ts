import {TaskDto} from '../../../states/task';

export interface ITaskFormProps {
  data?: TaskDto;

  onSubmit: (data: TaskDto) => void;
}
