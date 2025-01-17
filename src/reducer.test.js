import { addTask, changeTitle, deleteTask } from './actions';
import reducer from './reducer';

describe('reducer', () => {
  describe('changeTitle', () => {
    it('새로운 타이틀로 변경함', () => {
      const initialState = {
        taskTitle: '',
      };
      const state = reducer(initialState, changeTitle('newTitle'));

      expect(state.taskTitle).toBe('newTitle');
    });
  });
  describe('addTask', () => {
    it('새로운 테스크를 추가한다.', () => {
      const initialState = {
        tasks: [],
      };
      const state = reducer(initialState, addTask('hi'));

      expect(state.tasks).toHaveLength(1);
      expect(state.tasks[0].title).toBe('hi');
    });
  });
  describe('deleteTask', () => {
    it('기존 테스크를 삭제한다.', () => {
      const initialState = {
        tasks: [
          { title: 'hi', id: 1 },
        ],
      };
      const state = reducer(initialState, deleteTask(1));

      expect(state.tasks).toHaveLength(0);
    });
  });
});
