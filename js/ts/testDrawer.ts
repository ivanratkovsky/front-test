export class TestDrawer {
  private services: any = [];

  private temp(view: any) {
    $("body").prepend($.mustache(view, {data: this.services}));
  }

  private output() {
    this.loadTemplate('jstemplate/test.tpl').then(res => this.temp(res));
  }

  private add(res: any) {
    this.services = res;
    return;
  }

  private prepare(data: any) {
     return JSON.parse(data);
  }

  public draw() {
     this.loadData('js/sms.js').then(res => this.prepare(res)).then(data => this.add(data)).then(() => this.output());
  }

  public openModal(id: any) {
    this.services.map((service: any) => {
      if (service.ID === Number(id)) {
          $('.info').empty();
          $('#key').append(service.Params[0].Acr);
          $('#name').append(service.Params[0].Name);
      }
    });
		$('.modal').css('display', 'block').animate({opacity: 1, top: '50%'}, 200);
  }

  public closeModal(e: any) {
    e.preventDefault();
    $('.modal').animate({opacity: 0, top: '50%'}, 200).css('display', 'none');
  }

   private loadData(url: string) {
    return this.request(url);
  }

   private loadTemplate(url: string) {
     return this.request(url);
  }

  private request(url: string) {
    return new Promise((resolve) => {
      $.ajax({
        url: url,
        success: function (data) {
           resolve(data);
        }
      });
    })
  }
}
