describe('Menu', function() {
  
  beforeEach(function() {
    menu = new Menu();
  });

  it('initializes with a menu', () => {
    expect(menu.options).not.toBeNull()
  });
});