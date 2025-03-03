import Window from '../../../src/window/Window';
import Image from '../../../src/nodes/html-image-element/Image';
import HTMLImageElement from '../../../src/nodes/html-image-element/HTMLImageElement';

describe('Image', () => {
	let window: Window;

	beforeEach(() => {
		window = new Window();
	});

	describe('constructor()', () => {
		it('Create img element without width and height.', () => {
			const image = new Image();
			expect(image.width).toBe(0);
			expect(image.height).toBe(0);
			expect(image.tagName).toBe('IMG');
			expect(image instanceof HTMLImageElement).toBe(true);
		});

		it('Create img element with width and height defined.', () => {
			// We use window.Image() to have the correct ownerDocument defined
			const image = new window.Image(100, 200);
			expect(image.width).toBe(100);
			expect(image.height).toBe(200);
		});
	});
});
