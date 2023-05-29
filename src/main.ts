import "./style.css";
import "phaser";
import { menu } from "./menu-scene";

const GameConfig: Phaser.Types.Core.GameConfig = {
  title: "ExampleGame",
  version: "2.0",
  type: Phaser.AUTO,
  parent: "app",
  // `as as Phaser.Types.Scenes.SettingsConfig[]` is required until https://github.com/photonstorm/phaser/pull/6235
  scene: [menu()] as Phaser.Types.Scenes.SettingsConfig[],
  input: {
    keyboard: true,
  },
  backgroundColor: "#000000",
  render: { pixelArt: true, antialias: false },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  width: window.innerWidth,
  height: window.innerHeight,
  scale: {
    mode: Phaser.Scale.NONE,
    autoCenter: Phaser.Scale.NO_CENTER,
    // `fullscreenTarget` must be defined for phones to not have
    // a small margin during fullscreen.
    fullscreenTarget: "app",
    expandParent: false,
  },
};

export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

window.addEventListener("load", () => {
  // Expose `_game` to allow debugging, mute button and fullscreen button
  (window as any)._game = new Game(GameConfig);
});
