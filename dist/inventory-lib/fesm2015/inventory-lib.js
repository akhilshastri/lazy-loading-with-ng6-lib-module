import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class InventoryLibService {
    constructor() { }
}
InventoryLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
InventoryLibService.ctorParameters = () => [];
/** @nocollapse */ InventoryLibService.ngInjectableDef = defineInjectable({ factory: function InventoryLibService_Factory() { return new InventoryLibService(); }, token: InventoryLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class InventoryLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
InventoryLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-inventory-lib',
                template: `
    <p>
      inventory-lib works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
InventoryLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class InventoryLibModule {
}
InventoryLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [InventoryLibComponent],
                exports: [InventoryLibComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class OrderListComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
OrderListComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-order-list',
                template: `<p>
  order-list works!
</p>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
OrderListComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ routes = [
    {
        path: '',
        component: OrderListComponent
    }
];
class OrdersRoutingModule {
}
OrdersRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class OrdersModule {
}
OrdersModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    OrdersRoutingModule
                ],
                declarations: [OrderListComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { InventoryLibService, InventoryLibComponent, InventoryLibModule, OrdersModule, OrderListComponent, OrdersRoutingModule as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZW50b3J5LWxpYi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vaW52ZW50b3J5LWxpYi9saWIvaW52ZW50b3J5LWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9pbnZlbnRvcnktbGliL2xpYi9pbnZlbnRvcnktbGliLmNvbXBvbmVudC50cyIsIm5nOi8vaW52ZW50b3J5LWxpYi9saWIvaW52ZW50b3J5LWxpYi5tb2R1bGUudHMiLCJuZzovL2ludmVudG9yeS1saWIvbGliL29yZGVyLWxpc3Qvb3JkZXItbGlzdC5jb21wb25lbnQudHMiLCJuZzovL2ludmVudG9yeS1saWIvbGliL29yZGVycy1yb3V0aW5nLm1vZHVsZS50cyIsIm5nOi8vaW52ZW50b3J5LWxpYi9saWIvb3JkZXJzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEludmVudG9yeUxpYlNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItaW52ZW50b3J5LWxpYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBpbnZlbnRvcnktbGliIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBJbnZlbnRvcnlMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEludmVudG9yeUxpYkNvbXBvbmVudCB9IGZyb20gJy4vaW52ZW50b3J5LWxpYi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0ludmVudG9yeUxpYkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtJbnZlbnRvcnlMaWJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEludmVudG9yeUxpYk1vZHVsZSB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1vcmRlci1saXN0JyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgb3JkZXItbGlzdCB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgT3JkZXJMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1saXN0L29yZGVyLWxpc3QuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IE9yZGVyTGlzdENvbXBvbmVudFxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBPcmRlcnNSb3V0aW5nTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE9yZGVyc1JvdXRpbmdNb2R1bGUgfSBmcm9tICcuL29yZGVycy1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckxpc3RDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWxpc3Qvb3JkZXItbGlzdC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE9yZGVyc1JvdXRpbmdNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbT3JkZXJMaXN0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBPcmRlcnNNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtJQU9FLGlCQUFpQjs7O1lBTGxCLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztBQ0pEO0lBYUUsaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7OztHQUlUO2dCQUNELE1BQU0sRUFBRSxFQUFFO2FBQ1g7Ozs7Ozs7OztBQ1ZEOzs7WUFHQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLEVBQ1I7Z0JBQ0QsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO2FBQ2pDOzs7Ozs7O0FDUkQ7SUFZRSxpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUNQOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Q0FHWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7Ozs7Ozs7O0FDVEQsQUFLQSx1QkFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxrQkFBa0I7S0FDOUI7Q0FDRixDQUFDO0FBTUY7OztZQUpDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEI7Ozs7Ozs7QUNmRDs7O1lBTUMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDbkM7Ozs7Ozs7Ozs7Ozs7OzsifQ==