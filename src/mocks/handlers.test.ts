import { describe, expect, it } from 'vitest';

import { handlers } from '../mocks/handlers';

describe('demo', () => {
  it('returns 404 for an invalid page', async () => {
    const handler = handlers.find(h => h.path === '/test/:demoParameter');
    const response = await handler?.callback({
      request: new Request('/test/404'),
      params: { demoParameter: '404' },
    });
    expect(response?.status).toBe(404);
  });

  it('returns JSON response for "json" parameter', async () => {
    const handler = handlers.find(h => h.path === '/test/:demoParameter');
    const response = await handler?.callback({
      request: new Request('/test/json'),
      params: { demoParameter: 'json' },
    });
    const body = await response?.json();
    expect(body).toEqual({ message: 'Hello, World!' });
  });

  it('returns 401 for unauthorized requests', async () => {
    const handler = handlers.find(h => h.path === '/test/:demoParameter');
    const response = await handler?.callback({
      request: new Request('/test/any', {
        headers: { 'x-auth-token': 'invalid-token' },
      }),
      params: { demoParameter: 'any' },
    });
    expect(response?.status).toBe(401);
  });
});
