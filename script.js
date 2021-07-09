import http from 'k6/http';
import { sleep } from 'k6';
import { check, fail } from 'k6';
export let options = {
  vus: 10,
  duration: '30s',
};
export default function () {
  http.get('http://test.k6.io');
  sleep(1);
  fail('status code was *not* 200');
}
