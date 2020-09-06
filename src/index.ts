
import App from './components/App/App.svelte';

const app = new App({
	target: document.body,	props: { 
		name: 'Trackers',
		counter: 100
	}
});

(window as any)['app'] = app;

export default app; 

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept();
	import.meta.hot.dispose(() => {
	  app.$destroy();
	});
  }