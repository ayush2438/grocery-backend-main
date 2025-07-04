var productPrices = {};

$(function () {
    // Fetch product list and populate select options
    $.get(productListApiUrl, function (response) {
        productPrices = {};
        if (response) {
            var options = '<option value="">--Select--</option>';
            $.each(response, function (index, product) {
                options += '<option value="' + product.product_id + '">' + product.name + '</option>';
                productPrices[product.product_id] = parseFloat(product.price_per_unit);
            });
            $(".product-box").find("select").html(options);
        }
    });
});

// Add more product rows
$("#addMoreButton").click(function () {
    var row = $(".product-box").html();
    $(".product-box-extra").append(row);

    $(".product-box-extra .remove-row").last().removeClass('hideit');
    $(".product-box-extra .product-qty").last().val('1');
    $(".product-box-extra .product-price").last().val('0.0');
    $(".product-box-extra .item-total").last().val('0.0');
});

// Remove product row
$(document).on("click", ".remove-row", function () {
    $(this).closest('.row').remove();
    calculateValue();
});

// On product change
$(document).on("change", ".cart-product", function () {
    var product_id = $(this).val();
    var price = productPrices[product_id] || 0.0;

    var row = $(this).closest('.row');
    row.find(".product-price").val(price);

    var qty = parseFloat(row.find(".product-qty").val()) || 1;
    var total = price * qty;
    row.find(".item-total").val(total.toFixed(2));

    calculateValue();
});

// On quantity change
$(document).on("input", ".product-qty", function () {
    var row = $(this).closest('.row');
    var price = parseFloat(row.find(".product-price").val()) || 0.0;
    var qty = parseFloat($(this).val()) || 1;
    var total = price * qty;

    row.find(".item-total").val(total.toFixed(2));

    calculateValue();
});

// Calculate grand total
function calculateValue() {
    var total = 0;
    $(".item-total").each(function () {
        total += parseFloat($(this).val()) || 0;
    });
    $("#product_grand_total").val(total.toFixed(2));
}

// Save order
$("#saveOrder").on("click", function () {
    var requestPayload = {
        customer_name: $('#customerName').val().trim(),
        grand_total: parseFloat($("#product_grand_total").val()) || 0,
        order_details: []
    };

    $(".product-box-extra .row").each(function () {
        var product_id = $(this).find(".cart-product").val();
        var qty = parseFloat($(this).find(".product-qty").val()) || 1;
        var total = parseFloat($(this).find(".item-total").val()) || 0;

        if (product_id) {
            requestPayload.order_details.push({
                product_id: product_id,
                quantity: qty,
                total_price: total
            });
        }
    });

    // Validation
    if (!requestPayload.customer_name || requestPayload.order_details.length === 0) {
        alert("Please enter customer name and add at least one product.");
        return;
    }

    // Send request
    callApi("POST", orderSaveApiUrl, {
        data: JSON.stringify(requestPayload)
    });
});
