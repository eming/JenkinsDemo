import http from 'k6/http';
import { sleep } from 'k6';
import { check, fail } from 'k6';
export let options = {
  thresholds: {
    http_req_failed: ['rate<0.01'],   // http errors should be less than 1% 
    http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
  },
  vus: 10,
  duration: '30s',
};
export default function () {
  let res = http.get('https://eminguliyev1987.com/');
  sleep(1);
  check(res, {
    'response code was 200': (res) => res.status == 200
  });
}
