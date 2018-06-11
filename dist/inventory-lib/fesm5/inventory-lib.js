import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InventoryLibService = /** @class */ (function () {
    function InventoryLibService() {
    }
    InventoryLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    InventoryLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ InventoryLibService.ngInjectableDef = defineInjectable({ factory: function InventoryLibService_Factory() { return new InventoryLibService(); }, token: InventoryLibService, providedIn: "root" });
    return InventoryLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InventoryLibComponent = /** @class */ (function () {
    function InventoryLibComponent() {
    }
    /**
     * @return {?}
     */
    InventoryLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    InventoryLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-inventory-lib',
                    template: "\n    <p>\n      inventory-lib works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    InventoryLibComponent.ctorParameters = function () { return []; };
    return InventoryLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InventoryLibModule = /** @class */ (function () {
    function InventoryLibModule() {
    }
    InventoryLibModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [InventoryLibComponent],
                    exports: [InventoryLibComponent]
                },] },
    ];
    return InventoryLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var OrderListComponent = /** @class */ (function () {
    function OrderListComponent() {
    }
    /**
     * @return {?}
     */
    OrderListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    OrderListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-order-list',
                    template: "<p>\n  order-list works!\n</p>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    OrderListComponent.ctorParameters = function () { return []; };
    return OrderListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ routes = [
    {
        path: '',
        component: OrderListComponent
    }
];
var OrdersRoutingModule = /** @class */ (function () {
    function OrdersRoutingModule() {
    }
    OrdersRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                },] },
    ];
    return OrdersRoutingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var OrdersModule = /** @class */ (function () {
    function OrdersModule() {
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
    return OrdersModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { InventoryLibService, InventoryLibComponent, InventoryLibModule, OrdersModule, OrderListComponent, OrdersRoutingModule as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZW50b3J5LWxpYi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vaW52ZW50b3J5LWxpYi9saWIvaW52ZW50b3J5LWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9pbnZlbnRvcnktbGliL2xpYi9pbnZlbnRvcnktbGliLmNvbXBvbmVudC50cyIsIm5nOi8vaW52ZW50b3J5LWxpYi9saWIvaW52ZW50b3J5LWxpYi5tb2R1bGUudHMiLCJuZzovL2ludmVudG9yeS1saWIvbGliL29yZGVyLWxpc3Qvb3JkZXItbGlzdC5jb21wb25lbnQudHMiLCJuZzovL2ludmVudG9yeS1saWIvbGliL29yZGVycy1yb3V0aW5nLm1vZHVsZS50cyIsIm5nOi8vaW52ZW50b3J5LWxpYi9saWIvb3JkZXJzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEludmVudG9yeUxpYlNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItaW52ZW50b3J5LWxpYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBpbnZlbnRvcnktbGliIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBJbnZlbnRvcnlMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEludmVudG9yeUxpYkNvbXBvbmVudCB9IGZyb20gJy4vaW52ZW50b3J5LWxpYi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0ludmVudG9yeUxpYkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtJbnZlbnRvcnlMaWJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEludmVudG9yeUxpYk1vZHVsZSB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1vcmRlci1saXN0JyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgb3JkZXItbGlzdCB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgT3JkZXJMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1saXN0L29yZGVyLWxpc3QuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IE9yZGVyTGlzdENvbXBvbmVudFxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBPcmRlcnNSb3V0aW5nTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE9yZGVyc1JvdXRpbmdNb2R1bGUgfSBmcm9tICcuL29yZGVycy1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckxpc3RDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWxpc3Qvb3JkZXItbGlzdC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE9yZGVyc1JvdXRpbmdNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbT3JkZXJMaXN0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBPcmRlcnNNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtJQU9FO0tBQWlCOztnQkFMbEIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7OEJBSkQ7Ozs7Ozs7QUNBQTtJQWFFO0tBQWlCOzs7O0lBRWpCLHdDQUFROzs7SUFBUjtLQUNDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLHFEQUlUO29CQUNELE1BQU0sRUFBRSxFQUFFO2lCQUNYOzs7O2dDQVZEOzs7Ozs7O0FDQUE7Ozs7Z0JBR0MsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxFQUNSO29CQUNELFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO29CQUNyQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztpQkFDakM7OzZCQVJEOzs7Ozs7O0FDQUE7SUFZRTtLQUFpQjs7OztJQUVqQixxQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxrQ0FHWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2I7Ozs7NkJBVEQ7Ozs7Ozs7QUNBQSxBQUtBLHFCQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLGtCQUFrQjtLQUM5QjtDQUNGLENBQUM7Ozs7O2dCQUVELFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCOzs4QkFmRDs7Ozs7OztBQ0FBOzs7O2dCQU1DLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUI7cUJBQ3BCO29CQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO2lCQUNuQzs7dUJBWkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==