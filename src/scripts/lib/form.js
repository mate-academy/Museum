import { scrollToTop } from './scrollToTop';

export function resetForm(e) {
  e.preventDefault();
  e.target.reset();
  scrollToTop();
}
