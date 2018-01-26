import * as types from './types';

export function addDot(value) {
  return { type: types.DOT_ADD, value }
}
