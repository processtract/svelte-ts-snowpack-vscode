import { render, fireEvent } from '@testing-library/svelte'
import App from '../../src/components/App/App.svelte';

describe('App Component', () => {

    test('Click Button', async () => {
        const component = render(App, { name: 'World', counter: 0 })

        const result = component.getByText('Increment Direct');

        expect(result).toBeInTheDocument();
    });

});

export{}