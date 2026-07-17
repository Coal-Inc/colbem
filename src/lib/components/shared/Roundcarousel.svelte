<script lang="ts">
	interface CarouselImage {
		src: string;
	}

	interface Props {
		images: CarouselImage[];
		imageWidth?: number;
		imageHeight?: number;
		spacing?: number;
		speed?: number;
		direction?: 'right' | 'left';
		drag?: boolean;
		sensitivity?: number;
		tilt?: number;
		perspective?: number;
		cornerRadius?: number;
		innerDim?: number;
		background?: string;
	}

	let {
		images,
		imageWidth = 300,
		imageHeight = 300,
		spacing = 3,
		speed = 7,
		direction = 'right',
		drag = true,
		sensitivity = 5,
		tilt = -7,
		perspective = 3000,
		cornerRadius = 15,
		innerDim = 3.5,
		background = '#000000'
	}: Props = $props();

	const count = images.length;
	const angle = 360 / count;
	const factor = 1 + spacing * 0.15;
	const radius = (imageWidth * factor) / (2 * Math.tan(Math.PI / count));
	const degPerSec = speed * 6 * (direction === 'left' ? -1 : 1);

	let ring: HTMLDivElement;
	let rotY = 0;
	let vel = 0;
	let lastT = 0;
	let dragging = false;
	let dragX = 0;
	let rafId = 0;

	function apply() {
		if (ring) ring.style.transform = `translateZ(${-radius}px) rotateY(${rotY}deg)`;
	}

	function draw(now: number) {
		const dt = lastT ? (now - lastT) / 1000 : 0;
		lastT = now;
		const f = Math.min(dt, 0.1);
		if (!dragging) {
			if (Math.abs(vel) > 0.01) {
				rotY += vel * f;
				vel *= 0.94;
			} else {
				rotY += degPerSec * f;
			}
		}
		apply();
		rafId = requestAnimationFrame(draw);
	}

	function mount(node: HTMLDivElement) {
		ring = node;
		apply();
		rafId = requestAnimationFrame(draw);
		return {
			destroy() {
				cancelAnimationFrame(rafId);
			}
		};
	}

	function onPointerDown(e: PointerEvent) {
		if (!drag) return;
		(e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
		dragging = true;
		dragX = e.clientX;
		vel = 0;
	}
	function onPointerMove(e: PointerEvent) {
		if (!dragging) return;
		const dx = e.clientX - dragX;
		dragX = e.clientX;
		const k = 0.3 * sensitivity;
		rotY += dx * k;
		vel = dx * k * 60;
	}
	function onPointerUp(e: PointerEvent) {
		(e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
		dragging = false;
	}
</script>

<div
	class="flex h-full w-full items-center justify-center overflow-hidden"
	style="background: {background}; perspective: {perspective}px; cursor: {drag ? 'grab' : 'default'}; touch-action: none;"
	onpointerdown={onPointerDown}
	onpointermove={onPointerMove}
	onpointerup={onPointerUp}
	onpointercancel={onPointerUp}
	role="presentation"
>
	<div style="transform-style: preserve-3d; transform: rotateX({tilt}deg);">
		<div use:mount style="position: relative; width: {imageWidth}px; height: {imageHeight}px; transform-style: preserve-3d;">
			{#each images as img, i (img.src)}
				<div
					style="position: absolute; inset: 0; transform: rotateY({i * angle}deg) translateZ({radius}px); transform-style: preserve-3d;"
				>
					<div
						class="absolute inset-0 overflow-hidden bg-cover bg-center"
						style="border-radius: {cornerRadius}px; backface-visibility: hidden; background-image: url({img.src}); box-shadow: 0 10px 30px rgba(0,0,0,0.35);"
					></div>
					<div
						class="absolute inset-0 overflow-hidden bg-cover bg-center"
						style="border-radius: {cornerRadius}px; backface-visibility: hidden; transform: rotateY(180deg); background-image: url({img.src}); filter: brightness({innerDim / 10});"
					></div>
				</div>
			{/each}
		</div>
	</div>
</div>