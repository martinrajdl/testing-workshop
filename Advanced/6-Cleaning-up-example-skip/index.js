export class Foo {
	_count = 0;
	id;
	constructor() {
		this.id = ++Foo._count; // starts with 1
	}
}
