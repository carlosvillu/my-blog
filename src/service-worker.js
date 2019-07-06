/* eslint no-console:0 */
/* global self clients fetch */

const VERSION = 14

self.addEventListener('install', onInstall)
self.addEventListener('activate', onActivate)
self.addEventListener('message', onMessage)
self.addEventListener('fetch', onFetch)

function onInstall(evt) {
  self.skipWaiting()
  console.log(`SW with version ${VERSION} installed`)
}

function onActivate(evt) {
  const handleActivation = async () => {
    await clients.claim()
    console.log('clients => ', clients)
    console.log('All clients', await clients.matchAll())
    console.log(`SW with version ${VERSION} activated`)
  }
  evt.waitUntil(handleActivation())
}

function onFetch(evt) {
  const handleFetch = async () => {
    console.log('Fetch', evt.request.url)

    // return new Response('Not Found', {
    //   status: 400,
    //   statusText: 'Not Found'
    // })

    return fetch(evt.request)
  }
  evt.respondWith(handleFetch())
}

function onMessage() {
  console.log('onMessage')
}
