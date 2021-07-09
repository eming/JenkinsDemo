import http from 'k6/http';
import { sleep } from 'k6';
import { check, fail } from 'k6';
export let options = {
  vus: 10,
  duration: '30s',
};
export default function () {
  let res = http.get('https://eminguliyev1987.com/');
  sleep(1);
    check(res, {
    'response code was 200': (res) => res.status == 200,
    'body size was 1234 bytes': (res) => res.body.length == 1234,
  });
}
