import './style.css';
import 'phaser';
import { MenuScene } from './MenuScene';

const GameConfig: Phaser.Types.Core.GameConfig = {
	title: 'ExampleGame',
	version: '2.0',
	type: Phaser.AUTO,
	parent: 'app',
	// `as as Phaser.Types.Scenes.SettingsConfig[]` is required until https://github.com/photonstorm/phaser/pull/6235
	scene: [MenuScene()] as Phaser.Types.Scenes.SettingsConfig[],
	input: {
		keyboard: true,
		mouse: true,
	},
	backgroundColor: '#333',
	render: { pixelArt: true, antialias: false },
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
			debug: false,
		},
	},
	width: window.innerWidth,
	height: window.innerHeight,
	scale: {
		mode: Phaser.Scale.RESIZE,
		autoCenter: Phaser.Scale.NO_CENTER,
		// `fullscreenTarget` must be defined for phones to not have
		// a small margin during fullscreen.
		fullscreenTarget: 'app',
		expandParent: true,
	},
};

export class Game extends Phaser.Game {
	constructor(config: Phaser.Types.Core.GameConfig) {
		super(config);
	}
}

window.addEventListener('load', () => {
	// Expose `_game` to allow debugging, mute button and fullscreen button
	(window as any)._game = new Game(GameConfig);
});