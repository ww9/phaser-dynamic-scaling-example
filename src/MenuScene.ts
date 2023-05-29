import 'phaser';
import image from '../assets/image.png';
import sound from '../assets/sound.wav';

export const menuSceneKey = 'MenuScene';

export function MenuScene(): Phaser.Types.Scenes.SettingsConfig | Phaser.Types.Scenes.CreateSceneFromObjectConfig {
	let startKey: Phaser.Input.Keyboard.Key;
	let sprites: { xOffset: number; yOffset: number; image: Phaser.GameObjects.Image; speed: number }[];

	return {
		key: menuSceneKey,
		preload() {
			sprites = [];
			if (this.input.keyboard !== null) {
				startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
			}
			startKey.isDown = false;
			this.load.image('image', image);
			this.load.audio('sound', sound);
		},
		create() {
			this.add.text(0, 0, 'Press S to restart scene', {
				fontSize: '30px',
				fontFamily: 'Helvetica',
			}).setDepth(1);

			this.add
				.image(100, 100, 'image')
				.setInteractive()
				.on('pointerdown', (e: Event) => {
					window.console.log(e);
				});

			for (let i = 0; i < 300; i++) {
				const xOffset = Phaser.Math.FloatBetween(0, 1);
				const yOffset = Phaser.Math.FloatBetween(0, 1);
				const x = this.scale.width * xOffset;
				const y = this.scale.height * yOffset;

				const image = this.add.image(x, y, 'image');
				image.setBlendMode(Phaser.BlendModes.COPY);
				sprites.push({
					xOffset,
					yOffset,
					image: image,
					speed: 2 + Math.random() * 6,
				});
			}
		},
		update() {
			if (startKey.isDown) {
				this.sound.play('sound');
				this.scene.start(menuSceneKey);
			}

			for (let i = 0; i < sprites.length; i++) {
				sprites[i].yOffset += sprites[i].speed / 1000;
				if (sprites[i].yOffset > 1) {
					sprites[i].yOffset = -0.1;
				}
				const sprite = sprites[i].image;
				sprite.x = this.scale.width * sprites[i].xOffset;
				sprite.y = this.scale.height * sprites[i].yOffset;
			}
		},
	};
}
