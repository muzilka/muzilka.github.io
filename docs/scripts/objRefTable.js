const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.scrollto,
		C3.Plugins.Touch,
		C3.Behaviors.Anchor,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Behaviors.Bullet,
		C3.Plugins.progressbar,
		C3.Behaviors.Sin,
		C3.Behaviors.Rotate,
		C3.Behaviors.Flash,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.LocalStorage,
		C3.Plugins.Browser,
		C3.Plugins.Audio,
		C3.Plugins.List,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Behaviors.EightDir.Acts.SimulateControl,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.progressbar.Exps.Progress,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Sprite.Exps.Opacity,
		C3.Plugins.Sprite.Cnds.CompareOpacity,
		C3.Plugins.progressbar.Acts.SetProgress,
		C3.Plugins.progressbar.Cnds.CompareProgress,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Cnds.OnDestroyed,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.TiledBg.Acts.SetOpacity,
		C3.Plugins.TiledBg.Cnds.CompareOpacity,
		C3.Plugins.TiledBg.Acts.Destroy,
		C3.Plugins.System.Acts.GoToLayoutByName,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Exps.layoutname,
		C3.Plugins.System.Acts.AddVar,
		C3.Behaviors.Rotate.Acts.SetEnabled,
		C3.Plugins.System.Acts.SubVar,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.System.Cnds.OnLoadFinished,
		C3.Plugins.System.Acts.LoadState,
		C3.Plugins.Touch.Cnds.OnDoubleTapGestureObject,
		C3.Plugins.Browser.Acts.Alert,
		C3.Plugins.Browser.Acts.GoToURL,
		C3.Plugins.Browser.Acts.LockOrientation,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Acts.SaveState,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.List.Exps.SelectedText
	];
};
self.C3_JsPropNameTable = [
	{"8Направлений": 0},
	{СледитьЗа: 0},
	{Кузя: 0},
	{Тач: 0},
	{Якорь: 0},
	{вправо: 0},
	{влево: 0},
	{вверх: 0},
	{вниз: 0},
	{фон: 0},
	{Твёрдый: 0},
	{забор: 0},
	{забортайл: 0},
	{Пуля: 0},
	{шарик: 0},
	{атака: 0},
	{жизни: 0},
	{Синусоида: 0},
	{враг: 0},
	{враги: 0},
	{фонменю: 0},
	{играть: 0},
	{Поворот: 0},
	{Мигание: 0},
	{кузяДемо: 0},
	{mode1: 0},
	{mode2: 0},
	{len: 0},
	{current: 0},
	{systxt: 0},
	{curtxt: 0},
	{шд: 0},
	{Текст: 0},
	{вМеню: 0},
	{ЛокальноеХранилище: 0},
	{выход: 0},
	{Победа: 0},
	{проигрыш: 0},
	{Браузер: 0},
	{сохранить: 0},
	{кубкифон: 0},
	{кубки: 0},
	{Аудио: 0},
	{шарики: 0},
	{банка: 0},
	{камни: 0},
	{выборШД: 0},
	{выборШДВопрос: 0},
	{started: 0}
];

self.InstanceType = {
	Кузя: class extends self.ISpriteInstance {},
	Тач: class extends self.IInstance {},
	вправо: class extends self.ISpriteInstance {},
	влево: class extends self.ISpriteInstance {},
	вверх: class extends self.ISpriteInstance {},
	вниз: class extends self.ISpriteInstance {},
	фон: class extends self.ITiledBackgroundInstance {},
	забор: class extends self.ISpriteInstance {},
	забортайл: class extends self.ITiledBackgroundInstance {},
	шарик: class extends self.ISpriteInstance {},
	атака: class extends self.ISpriteInstance {},
	жизни: class extends self.IProgressBarInstance {},
	враг: class extends self.ISpriteInstance {},
	враги: class extends self.IProgressBarInstance {},
	фонменю: class extends self.ISpriteInstance {},
	играть: class extends self.ISpriteInstance {},
	кузяДемо: class extends self.ISpriteInstance {},
	шд: class extends self.ISpriteInstance {},
	Текст: class extends self.ITextInstance {},
	вМеню: class extends self.IButtonInstance {},
	ЛокальноеХранилище: class extends self.IInstance {},
	выход: class extends self.ISpriteInstance {},
	Победа: class extends self.ITextInstance {},
	проигрыш: class extends self.ITextInstance {},
	Браузер: class extends self.IInstance {},
	сохранить: class extends self.ISpriteInstance {},
	кубкифон: class extends self.ISpriteInstance {},
	кубки: class extends self.ITextInstance {},
	Аудио: class extends self.IInstance {},
	шарики: class extends self.IProgressBarInstance {},
	банка: class extends self.ISpriteInstance {},
	камни: class extends self.ITiledBackgroundInstance {},
	выборШД: class extends self.IListInstance {},
	выборШДВопрос: class extends self.ITextInstance {}
}