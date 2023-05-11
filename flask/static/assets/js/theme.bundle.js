(() => {
    var e,
        t,
        n,
        i,
        s = {
            5692: () => {
                const e = document.querySelectorAll(".dropdown-toggle");
                e.length && e.forEach((e => new Dropdown(e, {
                    popperConfig: e => {
                        const t = e
                            .modifiers
                            .find((({name: e}) => "preventOverflow" === e));
                        return void 0 !== t && (t.options = {
                            ...t.options,
                            altAxis: !0
                        }),
                        e
                    }
                })))
            },
            258: (e, t, n) => {
                "use strict";
                function i(e) {
                    return getComputedStyle(document.documentElement)
                        .getPropertyValue(e)
                        .trim()
                }
                n.d(t, {
                    Z: () => i
                })
            },
            7617: (e, t, n) => {
                "use strict";
                function i(e, t, ...n) {
                    let i,
                        s,
                        o;
                    const r = t.right - t.left,
                        a = t.bottom - t.top;
                    if (null === o || i !== r || s !== a) {
                        i = r,
                        s = a,
                        o = e.createLinearGradient(0, 0, 0, s);
                        for (let e = 0; e < n.length; e++) 
                            o.addColorStop(.5 * e, n[e])
                    }
                    return o
                }
                n.d(t, {
                    Z: () => i
                })
            },
            3646: (e, t, n) => {
                "use strict";
                function i(e) {
                    let t = [];
                    for (; e = e.nextElementSibling;) 
                        t.push(e);
                    return t
                }
                n.d(t, {
                    Z: () => i
                })
            },
            2233: (e, t, n) => {
                "use strict";
                function i(e) {
                    let t = [];
                    for (; e = e.previousElementSibling;) 
                        t.push(e);
                    return t
                }
                n.d(t, {
                    Z: () => i
                })
            },
            3517: (e, t, n) => {
                "use strict";
                function i(e, t, n) {
                    var i = e.indexOf(t) + t.length;
                    return e.substring(i, e.indexOf(n, i))
                }
                n.d(t, {
                    Z: () => i
                })
            },
            8939: () => {
                "use strict";
                const e = document.querySelectorAll("[data-toggle-password]");
                e.length && e.forEach((e => {
                    const t = e
                        .closest(".input-group")
                        .querySelector("[data-toggle-password-input]");
                    e.addEventListener("click", (() => {
                        "password" == t.type
                            ? (t.setAttribute("type", "text"), e.classList.add("pw-hidden"))
                            : (e.classList.remove("pw-hidden"), t.setAttribute("type", "password"))
                    }))
                }))
            },
            2106: () => {
                "use strict";
                const e = document.querySelectorAll('[data-toggle="tabLink"]');
                e.length && e.forEach((e => {
                    e.addEventListener("click", (e => {
                        e.preventDefault(),
                        document
                            .querySelector(`[data-bs-target="${e.target.hash}"]`)
                            .click()
                    }))
                }))
            },
            8290: () => {
                "use strict";
                let e = document.getElementById("checkAllCheckboxes");
                e && (
                    e.addEventListener("change", (e => {
                        document
                            .querySelectorAll(".form-check-input")
                            .forEach((t => {
                                t.checked = e.target.checked
                            }))
                    })),
                    document.querySelectorAll("tbody .form-check-input").forEach((t => {
                        t.addEventListener("change", (() => {
                            const t = document
                                    .querySelectorAll("tbody .form-check-input")
                                    .length,
                                n = document
                                    .querySelectorAll("tbody .form-check-input:checked")
                                    .length;
                            t == n && (e.indeterminate = !1, e.checked = !0),
                            t > n && n >= 1 && (e.indeterminate = !0),
                            0 == n && (e.indeterminate = !1, e.checked = !1)
                        }))
                    }))
                )
            },
            4931: () => {
                "use strict";
                const e = document.querySelectorAll('[data-bs-toggle="tooltip"]');
                e.length && e.forEach((e => {
                    new Tooltip(e)
                }))
            },
            4748: () => {
                "use strict";
                const e = document.querySelectorAll(".needs-validation");
                e.length && e.forEach((e => {
                    e.addEventListener("submit", (t => {
                        e.checkValidity() || (t.preventDefault(), t.stopPropagation()),
                        e
                            .classList
                            .add("was-validated")
                    }), !1)
                }))
            },
            5078: (e, t, n) => {
                "use strict";
                document.querySelector("[data-clipboard-target]") && n
                    .e(997)
                    .then(n.t.bind(n, 2152, 23))
                    .then((({default: e}) => {
                        new e(".clipboard").on("success", (e => {
                            let t = e.trigger;
                            e.clearSelection();
                            let n = Tooltip.getInstance(t);
                            n.setContent({".tooltip-inner": "Copied!"}),
                            setTimeout((() => {
                                n.hide(),
                                n.setContent({".tooltip-inner": t.dataset.bsTitle})
                            }), 1e3)
                        })),
                        window.ClipboardJS = e
                    }))
                    .catch(console.warn)
                },
            6752: (e, t, n) => {
                "use strict";
                const i = document.querySelectorAll("[data-sortable]");
                i.length && n
                    .e(483)
                    .then(n.t.bind(n, 7137, 23))
                    .then((({default: e}) => {
                        i.forEach((t => {
                            let n = t.dataset.sortable,
                                s = t.dataset.sortableOptions
                                    ? JSON.parse(t.dataset.sortableOptions)
                                    : {},
                                o = [];
                            if (n) {
                                n = JSON.parse(n);
                                for (let e = 0; e < n.length; e++) 
                                    o.push(document.querySelector("#" + n[e]))
                            } else 
                                o = [i[0]];
                            e(o, s)
                        })),
                        window.Dragula = e
                    }))
                    .catch(console.warn)
                },
            7517: (e, t, n) => {
                "use strict";
                const i = document.querySelectorAll("[data-dropzone]");
                i.length && n
                    .e(650)
                    .then(n.bind(n, 247))
                    .then((({default: e}) => {
                        e.autoDiscover = !1;
                        i.forEach((t => {
                            const n = {
                                ...{
                                    url: "/file/upload",
                                    previewTemplate: '\n        <form class="form" enctype="multipart/form-data">\n            <div ' +
                                            'class="dz-preview dz-file-preview">\n                <div class="dz-details d-' +
                                            'flex mb-1">\n                    <img class="dz-image img-fluid" data-dz-thumb' +
                                            'nail>\n                    <div class="dz-file-wrapper text-start w-100">\n   ' +
                                            '                     <p class="dz-filename mb-0 fs-4">\n                      ' +
                                            '      <span data-dz-name></span> (<span class="dz-size fs-6" data-dz-size></sp' +
                                            'an>)\n                        </p>\n                    </div>\n              ' +
                                            '  </div>\n                <div class="d-flex justify-content-between align-ite' +
                                            'ms-center h-20px">\n                    <div class="dz-progress progress w-100' +
                                            '">\n                        <div class="dz-upload progress-bar bg-success" rol' +
                                            'e="progressbar" style="width: 0" aria-valuenow="0" aria-valuemin="0" aria-valu' +
                                            'emax="100" data-dz-uploadprogress></div>\n                    </div>\n        ' +
                                            '            <div class="ms-3">\n                        <div class="dz-success' +
                                            '-mark text-success">\n                            <svg xmlns="http://www.w3.or' +
                                            'g/2000/svg" viewBox="0 0 24 24" height="16" width="16"><path d="M12,0A12,12,0,' +
                                            '1,0,24,12,12,12,0,0,0,12,0Zm6.93,8.2-6.85,9.29a1,1,0,0,1-1.43.19L5.76,13.77a1,' +
                                            '1,0,0,1-.15-1.41A1,1,0,0,1,7,12.21l4.08,3.26L17.32,7a1,1,0,0,1,1.39-.21A1,1,0,' +
                                            '0,1,18.93,8.2Z" style="fill: currentColor"/></svg>                      \n    ' +
                                            '                    </div>\n                        <div class="dz-error-mark ' +
                                            'text-danger" data-bs-toggle="tooltip" title="data-dz-errormessage">\n         ' +
                                            '                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"' +
                                            ' height="16" width="16"><path d="M12,0A12.24,12.24,0,0,0,3.47,3.65,11.85,11.85' +
                                            ',0,0,0,0,12.21,11.78,11.78,0,0,0,11.8,24H12A12.11,12.11,0,0,0,24,11.79h0A11.77' +
                                            ',11.77,0,0,0,12,0ZM10.5,16.54A1.48,1.48,0,0,1,12,15h0a1.53,1.53,0,0,1,1.52,1.4' +
                                            '7A1.47,1.47,0,0,1,12.05,18h0A1.53,1.53,0,0,1,10.5,16.54Zm.5-4v-6a1,1,0,0,1,2,0' +
                                            'v6a1,1,0,0,1-2,0Z" style="fill: currentColor"/></svg>\n                       ' +
                                            ' </div>\n                    </div>\n                </div>\n            </div' +
                                            '>\n        </form>',
                                    uploadMultiple: !0,
                                    autoProcessQueue: !0
                                },
                                ...t.dataset.dropzone
                                    ? JSON.parse(t.dataset.dropzone)
                                    : {}
                            };
                            let i = document.querySelector("[data-upload-files]"),
                                s = document.querySelector("[data-cancel-files]");
                            const o = new e(t, n);
                            o.on("addedfile", (e => {
                                t
                                    .querySelector(".dz-message")
                                    .style
                                    .display = "none"
                            })),
                            o.on("removedfile", (e => {
                                t
                                    .querySelector(".dz-message")
                                    .style
                                    .display = "block"
                            })),
                            o.on("error", ((e, n) => {
                                const i = t.querySelectorAll(".dz-preview .dz-error-mark");
                                i.length && i.forEach((e => {
                                    let t = new Tooltip(e);
                                    e.title = n,
                                    t = new Tooltip(e)
                                }))
                            })),
                            o.on("complete", ((e, t) => {
                                setTimeout((() => {
                                    s && s.click()
                                }), 2e3)
                                console.log("COMPLETE");
                                $("#file_history").load(location.href+' #file_history');
                                $.ajax({
                                    type: 'GET',
                                    url: '/file/list',
                                    success: function (data) {
                            
                                        data_dict = data.file_list
                                        data_dict_values = Object.values(data_dict);
                                        data_dict_keys = Object.keys(data_dict);
                                        data_dict_length = Object.keys(data_dict).length;
                            
                                        for (var i = 0; i < data_dict_length; i++) {
                                            $("#file_history").append(
                                                '<option value ='
                                                + '"' + data_dict_keys[i] + '"'
                                                + '>'
                                                + data_dict_values[i]
                                                + '</option>'
                                            )
                                        }
                                    }
                                });
                            })),
                            i && i.addEventListener("click", (e => {
                                e.preventDefault(),
                                o.processQueue()
                            })),
                            s && s.addEventListener("click", (e => {
                                e.preventDefault(),
                                o.removeAllFiles(!0)
                            }))
                        })),
                        window.Dropzone = e
                    }))
                    .catch(console.warn)
                },
            6001: (e, t, n) => {
                "use strict";
                const i = document.querySelectorAll("[data-flatpickr]");
                i.length && n
                    .e(694)
                    .then(n.bind(n, 8527))
                    .then((({default: e}) => {
                        i.forEach((t => {
                            const n = t.dataset.flatpickr
                                    ? JSON.parse(t.dataset.flatpickr)
                                    : {},
                                i = {
                                    ...{
                                        dateFormat: "m/d/Y",
                                        defaultHour: (new Date).getHours(),
                                        defaultMinute: (new Date).getMinutes(),
                                        prevArrow: '<svg height="9" height="9" class="fill-transparent" xmlns="http://www.w3.org/2' +
                                                '000/svg" viewBox="0 0 24 24"><defs><style>.cls-1{fill:none;stroke:currentColor' +
                                                ';stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;fill-rule:eveno' +
                                                'dd;}</style></defs><title>arrow-left-1</title><path class="cls-1" d="M16.25,23' +
                                                '.25,5.53,12.53a.749.749,0,0,1,0-1.06L16.25.75"/></svg>',
                                        nextArrow: '<svg height="9" height="9" class="fill-transparent" xmlns="http://www.w3.org/2' +
                                                '000/svg" viewBox="0 0 24 24"><defs><style>.cls-1{fill:none;stroke:currentColor' +
                                                ';stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;fill-rule:eveno' +
                                                'dd;}</style></defs><title>arrow-right-1</title><path class="cls-1" d="M5.5.75,' +
                                                '16.22,11.47a.749.749,0,0,1,0,1.06L5.5,23.25"/></svg>'
                                    },
                                    ...n
                                };
                            e(t, i)
                        })),
                        window.Flatpickr = e
                    }))
                    .catch(console.warn)
                },
            7143: (e, t, n) => {
                "use strict";
                const i = document.getElementById("fullcalendar");
                i && (async () => {
                    const {Calendar: e} = await n
                            .e(773)
                            .then(n.bind(n, 9665)),
                        [
                            {
                                default: t
                            }, {
                                default: s
                            }, {
                                default: o
                            }, {
                                default: r,
                                Draggable: a
                            }, {
                                default: l
                            }, {
                                default: c
                            },
                            d
                        ] = await Promise.all([
                            n
                                .e(580)
                                .then(n.bind(n, 8658)),
                            n
                                .e(842)
                                .then(n.bind(n, 1996)),
                            n
                                .e(689)
                                .then(n.bind(n, 9563)),
                            n
                                .e(756)
                                .then(n.bind(n, 6842)),
                            n
                                .e(613)
                                .then(n.bind(n, 2042)),
                            n
                                .e(230)
                                .then(n.t.bind(n, 381, 23)),
                            n
                                .e(383)
                                .then(n.bind(n, 8840))
                        ]);
                    let u = document.getElementById("draggable"),
                        h = document.getElementById("eventModal"),
                        p = h && new Modal(h),
                        f = document.getElementById("eventModalTitle"),
                        g = document.getElementById("eventForm"),
                        m = document.getElementById("eventName"),
                        b = document.getElementById("startDate"),
                        _ = document.getElementById("startTime"),
                        v = document.getElementById("endDate"),
                        y = document.getElementById("endTime"),
                        w = document.getElementById("location"),
                        E = document.getElementById("description"),
                        k = document.getElementById("allDayEvent"),
                        A = document.getElementById("eventType"),
                        C = document.getElementById("btnSaveEvent"),
                        T = document.getElementById("btnDeleteEvent"),
                        x = document.getElementById("btnAddEvent"),
                        S = null,
                        D = c().startOf("day"),
                        O = D
                            .clone()
                            .subtract(1, "day")
                            .format("YYYY-MM-DD"),
                        L = D.format("YYYY-MM-DD"),
                        M = (D.clone().add(1, "day").format("YYYY-MM-DD"), D.format("YYYY-MM")),
                        $ = null,
                        I = new e(i, {
                            themeSystem: "bootstrap5",
                            plugins: [
                                t, s, o, r, l
                            ],
                            initialView: "dayGridMonth",
                            contentHeight: "100%",
                            headerToolbar: {
                                left: "prev,next customToday",
                                center: "title",
                                right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                            },
                            buttonText: {
                                today: "Today",
                                month: "Month",
                                week: "Week",
                                day: "Day",
                                list: "List",
                                prev: "Prev",
                                next: "Next"
                            },
                            customButtons: {
                                customToday: {
                                    text: "Today",
                                    click: () => {
                                        I.today()
                                    }
                                }
                            },
                            viewDidMount: () => {
                                i
                                    .querySelector(".fc-customToday-button")
                                    .classList
                                    .add("btn-light")
                            },
                            eventClick: e => {
                                h && N(e)
                            },
                            slotDuration: "00:15:00",
                            slotMinTime: "08:00:00",
                            slotMaxTime: "19:00:00",
                            editable: !0,
                            droppable: !0,
                            dayMaxEvents: !0,
                            events: [
                                {
                                    id: d.setID(),
                                    title: "Interview",
                                    start: M + "05T10:30:00",
                                    end: M + "05T13:30:00",
                                    className: "bg-info",
                                    location: "Room 127",
                                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                                }, {
                                    id: d.setID(),
                                    title: "Team building trip",
                                    start: M + "15",
                                    end: M + "18",
                                    className: "bg-success",
                                    location: "Florida",
                                    description: "Integer ullamcorper metus sed urna laoreet, sed convallis leo pretium"
                                }, {
                                    id: d.setID(),
                                    title: "Team meeting",
                                    start: M + "25T13:15:00",
                                    end: M + "25T15:00:00",
                                    classNames: "bg-warning",
                                    location: "Conference room",
                                    description: "Maecenas aliquam lectus ut nibh gravida egestas"
                                }, {
                                    id: d.setID(),
                                    title: "Seminarium",
                                    start: L,
                                    allDay: !0,
                                    className: "bg-success",
                                    location: "Hall",
                                    description: "Mauris eu massa ac mauris dapibus consequat a at quam"
                                }, {
                                    id: d.setID(),
                                    title: "Front-End Interview",
                                    start: O + "T09:00:00",
                                    end: O + "T10:15:00",
                                    location: "Room 201",
                                    description: "Ut facilisis odio at lectus ultricies mattis. Morbi a arcu rhoncus ligula lobo" +
                                            "rtis aliquet a in est"
                                }, {
                                    id: d.setID(),
                                    title: "Meeting",
                                    start: O + "T10:30:00",
                                    end: O + "T11:30:00",
                                    className: "bg-success",
                                    location: "Office",
                                    description: "Nunc quis augue non odio porttitor mattis"
                                }, {
                                    id: d.setID(),
                                    title: "Lunch",
                                    start: O + "T12:00:00",
                                    end: O + "T12:40:00",
                                    className: "bg-success",
                                    location: "Diner",
                                    description: "Nam finibus felis hendrerit nibh vestibulum, vitae pellentesque leo sodales"
                                }, {
                                    id: d.setID(),
                                    title: "Scheduled server maintenance",
                                    start: M + "27",
                                    end: M + "29",
                                    className: "bg-danger",
                                    description: "Vestibulum maximus enim hendrerit molestie elementum"
                                }
                            ]
                        });
                    I.render(),
                    u && new a(u, {
                        itemSelector: ".fc-event",
                        eventData: e => ({title: e.innerText, className: e.dataset.class})
                    });
                    let N = e => {
                        S = e.event,
                        $ = S
                            ? S.id
                            : "",
                        g.reset(),
                        g
                            .classList
                            .remove("was-validated"),
                        T.style.display = "block",
                        f.textContent = "Edit Event",
                        p.show(),
                        m.value = S.title,
                        A.value = S.classNames[0],
                        S.extendedProps.location && (w.value = S.extendedProps.location),
                        S.extendedProps.description && (E.value = S.extendedProps.description),
                        S.start && (b.value = c(S.start).format("MM/DD/YYYY")),
                        S.start && (_.value = c(S.start).format("HH:mm")),
                        S.end && (v.value = c(S.end).format("MM/DD/YYYY")),
                        S.end && (y.value = c(S.end).format("HH:mm")),
                        k.checked = S.allDay,
                        j();
                        let t = b._flatpickr,
                            n = v._flatpickr,
                            i = _._flatpickr,
                            s = y._flatpickr,
                            o = A.tomselect;
                        t.setDate(b.value, !0),
                        n.setDate(v.value, !0),
                        i.setDate(_.value, !0),
                        s.setDate(y.value, !0),
                        o.sync()
                    };
                    h && k.addEventListener("change", (e => {
                        j()
                    }));
                    let j = e => {
                        k.checked
                            ? _.parentNode.style.display = "none"
                            : _.parentNode.style.display = "block",
                        k.checked
                            ? y.parentNode.style.display = "none"
                            : y.parentNode.style.display = "block"
                    };
                    function P(e) {
                        I
                            .getEventById(e)
                            .remove()
                    }
                    h && C.addEventListener("click", (e => {
                        e.preventDefault(),
                        null != $ && P($),
                        p.hide(),
                        I.addEvent({
                            id: d.setID(),
                            title: m.value,
                            start: c(new Date(b.value + " " + _.value)).toDate(),
                            end: c(new Date(v.value + " " + y.value)).toDate(),
                            allDay: k.checked,
                            className: A.value || "bg-success",
                            location: w.value,
                            description: E.value
                        }),
                        I.render(),
                        g.reset(),
                        j()
                    })),
                    h && x.addEventListener("click", (e => {
                        e.preventDefault(),
                        (e => {
                            g.reset(),
                            g
                                .classList
                                .remove("was-validated"),
                            T.style.display = "none",
                            f.textContent = "Add New Event",
                            b.value = c().format("MM/DD/YYYY"),
                            v.value = c().format("MM/DD/YYYY"),
                            _.value = c().format("HH:mm"),
                            y.value = c().format("HH:mm"),
                            $ = null;
                            let t = b._flatpickr,
                                n = v._flatpickr,
                                i = _._flatpickr,
                                s = y._flatpickr;
                            t.setDate(b.value, !0),
                            n.setDate(v.value, !0),
                            i.setDate(_.value, !0),
                            s.setDate(y.value, !0)
                        })()
                    })),
                    h && T.addEventListener("click", (e => {
                        e.preventDefault(),
                        null != $ && P($)
                    }))
                })();
                const s = document.getElementById("fullcalendarSimple");
                s && (async () => {
                    const {Calendar: e} = await n
                            .e(773)
                            .then(n.bind(n, 9665)),
                        [
                            {
                                default: t
                            }, {
                                default: i
                            }, {
                                default: o
                            }, {
                                default: r,
                                Draggable: a
                            }, {
                                default: l
                            }, {
                                default: c
                            },
                            d
                        ] = await Promise.all([
                            n
                                .e(580)
                                .then(n.bind(n, 8658)),
                            n
                                .e(842)
                                .then(n.bind(n, 1996)),
                            n
                                .e(689)
                                .then(n.bind(n, 9563)),
                            n
                                .e(756)
                                .then(n.bind(n, 6842)),
                            n
                                .e(613)
                                .then(n.bind(n, 2042)),
                            n
                                .e(230)
                                .then(n.t.bind(n, 381, 23)),
                            n
                                .e(383)
                                .then(n.bind(n, 8840))
                        ]);
                    let u = c()
                            .startOf("day")
                            .format("YYYY-MM"),
                        h = new e(s, {
                            themeSystem: "bootstrap5",
                            plugins: [
                                t, l
                            ],
                            initialView: "dayGridMonth",
                            headerToolbar: {
                                left: null,
                                center: "title",
                                right: "prev,next customToday"
                            },
                            buttonText: {
                                today: "Today",
                                prev: "Prev",
                                next: "Next"
                            },
                            customButtons: {
                                customToday: {
                                    text: "Today",
                                    click: () => {
                                        h.today()
                                    }
                                }
                            },
                            events: [
                                {
                                    title: "Interview",
                                    start: u + "05T10:30:00",
                                    end: u + "05T13:30:00",
                                    className: "bg-primary"
                                }
                            ]
                        });
                    h.render()
                })();
                const o = document.getElementById("fullcalendarDraggable");
                o && (async () => {
                    const {Calendar: e} = await n
                            .e(773)
                            .then(n.bind(n, 9665)),
                        [
                            {
                                default: t
                            }, {
                                default: i
                            }, {
                                default: s
                            }, {
                                default: r,
                                Draggable: a
                            }, {
                                default: l
                            }, {
                                default: c
                            },
                            d
                        ] = await Promise.all([
                            n
                                .e(580)
                                .then(n.bind(n, 8658)),
                            n
                                .e(842)
                                .then(n.bind(n, 1996)),
                            n
                                .e(689)
                                .then(n.bind(n, 9563)),
                            n
                                .e(756)
                                .then(n.bind(n, 6842)),
                            n
                                .e(613)
                                .then(n.bind(n, 2042)),
                            n
                                .e(230)
                                .then(n.t.bind(n, 381, 23)),
                            n
                                .e(383)
                                .then(n.bind(n, 8840))
                        ]);
                    let u = c().startOf("day"),
                        h = u
                            .clone()
                            .subtract(1, "day")
                            .format("YYYY-MM-DD"),
                        p = u.format("YYYY-MM-DD"),
                        f = (u.clone().add(1, "day").format("YYYY-MM-DD"), u.format("YYYY-MM")),
                        g = new e(o, {
                            themeSystem: "bootstrap5",
                            plugins: [
                                t, r, l
                            ],
                            initialView: "dayGridMonth",
                            headerToolbar: {
                                left: null,
                                center: "title",
                                right: "prev,next customToday"
                            },
                            buttonText: {
                                today: "Today",
                                prev: "Prev",
                                next: "Next"
                            },
                            customButtons: {
                                customToday: {
                                    text: "Today",
                                    click: () => {
                                        g.today()
                                    }
                                }
                            },
                            editable: !0,
                            droppable: !0,
                            events: [
                                {
                                    id: d.setID(),
                                    title: "Interview",
                                    start: f + "05T10:30:00",
                                    end: f + "05T13:30:00",
                                    className: "bg-info",
                                    location: "Room 127",
                                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                                }, {
                                    id: d.setID(),
                                    title: "Team building trip",
                                    start: f + "15",
                                    end: f + "18",
                                    className: "bg-success",
                                    location: "Florida",
                                    description: "Integer ullamcorper metus sed urna laoreet, sed convallis leo pretium"
                                }, {
                                    id: d.setID(),
                                    title: "Team meeting",
                                    start: f + "25T13:15:00",
                                    end: f + "25T15:00:00",
                                    classNames: "bg-warning",
                                    location: "Conference room",
                                    description: "Maecenas aliquam lectus ut nibh gravida egestas"
                                }, {
                                    id: d.setID(),
                                    title: "Seminarium",
                                    start: p,
                                    allDay: !0,
                                    className: "bg-success",
                                    location: "Hall",
                                    description: "Mauris eu massa ac mauris dapibus consequat a at quam"
                                }, {
                                    id: d.setID(),
                                    title: "Front-End Interview",
                                    start: h + "T09:00:00",
                                    end: h + "T10:15:00",
                                    location: "Room 201",
                                    description: "Ut facilisis odio at lectus ultricies mattis. Morbi a arcu rhoncus ligula lobo" +
                                            "rtis aliquet a in est"
                                }, {
                                    id: d.setID(),
                                    title: "Meeting",
                                    start: h + "T10:30:00",
                                    end: h + "T11:30:00",
                                    className: "bg-success",
                                    location: "Office",
                                    description: "Nunc quis augue non odio porttitor mattis"
                                }, {
                                    id: d.setID(),
                                    title: "Lunch",
                                    start: h + "T12:00:00",
                                    end: h + "T12:40:00",
                                    className: "bg-success",
                                    location: "Diner",
                                    description: "Nam finibus felis hendrerit nibh vestibulum, vitae pellentesque leo sodales"
                                }, {
                                    id: d.setID(),
                                    title: "Scheduled server maintenance",
                                    start: f + "27",
                                    end: f + "29",
                                    className: "bg-danger",
                                    description: "Vestibulum maximus enim hendrerit molestie elementum"
                                }
                            ]
                        });
                    g.render()
                })()
            },
            9723: (e, t, n) => {
                "use strict";
                const i = document.querySelector("[data-scrollspy]");
                i && n
                    .e(539)
                    .then(n.t.bind(n, 9178, 23))
                    .then((({default: e}) => {
                        new e("[data-scrollspy] a", {
                            reflow: !0,
                            ...i.dataset.scrollspy
                                ? JSON.parse(i.dataset.scrollspy)
                                : {}
                        }),
                        window.Gumshoe = e
                    }))
                    .catch(console.warn)
                },
            2040: (e, t, n) => {
                "use strict";
                const i = document.querySelectorAll(".highlight");
                i.length && Promise
                    .all([
                        n
                            .e(399)
                            .then(n.bind(n, 5286)),
                        n
                            .e(191)
                            .then(n.bind(n, 1042)),
                        n
                            .e(341)
                            .then(n.bind(n, 9622)),
                        n
                            .e(248)
                            .then(n.bind(n, 5010)),
                        n
                            .e(482)
                            .then(n.bind(n, 2756)),
                        n
                            .e(7)
                            .then(n.bind(n, 6167))
                    ])
                    .then((([
                        {
                            default: e
                        }, {
                            default: t
                        }, {
                            default: s
                        }, {
                            default: o
                        }, {
                            default: r
                        }, {
                            default: a
                        }
                    ]) => {
                        e.registerLanguage("html", t),
                        e.registerLanguage("javascript", s),
                        e.registerLanguage("scss", o),
                        e.registerLanguage("handlebars", r),
                        e.registerLanguage("bash", a),
                        i.forEach((t => {
                            e.highlightElement(t)
                        })),
                        n
                            .e(496)
                            .then(n.t.bind(n, 5241, 23))
                            .then((() => {
                                e.initLineNumbersOnLoad()
                            }))
                            .catch(console.warn),
                        window.hljs = e
                    }))
                    .catch(console.warn)
                },
            5835: (e, t, n) => {
                "use strict";
                const i = document.querySelectorAll("[data-inputmask]");
                i.length && n
                    .e(522)
                    .then(n.t.bind(n, 5382, 23))
                    .then((({default: e}) => {
                        e().mask(i),
                        window.Inputmask = e
                    }))
                    .catch(console.warn)
                },
            3493: (e, t, n) => {
                "use strict";
                const i = document.querySelectorAll("[data-list]"),
                    s = document.querySelectorAll("[data-sort]");
                i.length && n
                    .e(93)
                    .then(n.t.bind(n, 3709, 23))
                    .then((({default: e}) => {
                        const t = t => {
                            const n = t.dataset.list
                                    ? JSON.parse(t.dataset.list)
                                    : {},
                                i = t.querySelectorAll(".list-pagination"),
                                s = t.querySelector(".list-pagination-pages"),
                                o = t.querySelector(".list-pagination-prev"),
                                r = t.querySelector(".list-pagination-next"),
                                a = t.querySelector(".list-pagination-page-first"),
                                l = t.querySelector(".list-pagination-page-last"),
                                c = {
                                    ...{
                                        fuzzySearch: {
                                            searchClass: "list-fuzzy-search"
                                        },
                                        pagination: i.length
                                            ? {
                                                item
                                                : '<li class="page-item"><a class="page page-link" href="javascript: void(0);"></' +
                                                        'a></li>'
                                            }
                                            : void 0,
                                        listClass: "list",
                                        sortClass: "list-sort",
                                        searchClass: "list-search"
                                    },
                                    ...n
                                },
                                d = new e(t, c);
                            a && (a.innerHTML = d.i),
                            l && (l.innerHTML = d.page),
                            s && (s.innerHTML = d.size()),
                            i.length && i.forEach((e => {
                                (e => {
                                    d.matchingItems.length <= d.page
                                        ? e.style.display = "none"
                                        : e.style.display = "flex"
                                })(e),
                                e.addEventListener("click", (e => {
                                    e.preventDefault()
                                }))
                            })),
                            o && o.addEventListener("click", (e => {
                                e.preventDefault();
                                const t = parseInt(d.i) - parseInt(d.page);
                                1 === t
                                    ? o.setAttribute("disabled", "")
                                    : o.removeAttribute("disabled"),
                                r && r.removeAttribute("disabled"),
                                t > 0 && d.show(t, d.page)
                            })),
                            r && (
                                d.size() > d.page && r.removeAttribute("disabled"),
                                r.addEventListener("click", (e => {
                                    e.preventDefault();
                                    const t = parseInt(d.i) + parseInt(d.page);
                                    t + d.page > d.size()
                                        ? r.setAttribute("disabled", "")
                                        : r.removeAttribute("disabled"),
                                    o && o.removeAttribute("disabled"),
                                    t <= d.size() && d.show(t, d.page)
                                }))
                            ),
                            d.on("updated", (() => {
                                const e = parseInt(d.i);
                                a && (a.innerHTML = e),
                                l && (
                                    l.innerHTML = e + parseInt(d.page) - 1 > d.size()
                                        ? d.size()
                                        : e + parseInt(d.page) - 1
                                )
                            }))
                        };
                        i.forEach((e => {
                            t(e)
                        })),
                        s.length && s.forEach((e => {
                            e.addEventListener("click", (e => {
                                e.preventDefault()
                            }))
                        })),
                        window.List = e
                    }))
                    .catch(console.warn)
                },
            4690: (e, t, n) => {
                "use strict";
                const i = document.querySelectorAll("[data-emoji-picker]"),
                    s = document.querySelectorAll("[data-emoji-popup]");
                function o(e, t = document.activeElement) {
                    const [n, i] = [t.selectionStart, t.selectionEnd];
                    t.setRangeText(e, n, i, "end")
                }
                i.length && n
                    .e(416)
                    .then(n.bind(n, 7741))
                    .then((({createPicker: e}) => {
                        i.forEach((t => {
                            const n = new e({rootElement: t, emojiSize: "1.75rem"});
                            let i = document.querySelector(t.dataset.emojiTarget);
                            i && n.addEventListener("emoji:select", (e => {
                                o(e.emoji, i),
                                i.focus()
                            }))
                        }))
                    }))
                    .catch(console.warn),
                s.length && Promise
                    .all([
                        n
                            .e(840)
                            .then(n.bind(n, 6921)),
                        n
                            .e(416)
                            .then(n.bind(n, 7741))
                    ])
                    .then((([
                        {
                            createPopup: e
                        }
                    ]) => {
                        s.forEach((t => {
                            const n = new e({
                                emojiSize: "1.75rem"
                            }, {
                                referenceElement: t,
                                triggerElement: t,
                                showCloseButton: !1,
                                position: "top-start",
                                className: "emoji-popup"
                            });
                            let i = document.querySelector(t.dataset.emojiTarget);
                            i && (n.addEventListener("emoji:select", (e => {
                                o(e.emoji, i),
                                i.focus()
                            })), t.addEventListener("click", (() => {
                                n.toggle(t)
                            })))
                        }))
                    }))
                    .catch(console.warn)
                },
            5719: (e, t, n) => {
                "use strict";
                const i = document.querySelectorAll("[data-quill]");
                i.length && n
                    .e(125)
                    .then(n.t.bind(n, 6095, 23))
                    .then((({default: e}) => {
                        i.forEach((t => {
                            const n = {
                                theme: "snow",
                                modules: {
                                    toolbar: [
                                        [
                                            {
                                                header: [
                                                    1,
                                                    2,
                                                    3,
                                                    4,
                                                    5,
                                                    6,
                                                    !1
                                                ]
                                            }
                                        ],
                                        [
                                            "bold", "italic", "underline"
                                        ],
                                        [
                                            "link", "blockquote", "image"
                                        ],
                                        [
                                            {
                                                list: "ordered"
                                            }, {
                                                list: "bullet"
                                            }
                                        ]
                                    ]
                                },
                                ...t.dataset.quill
                                    ? JSON.parse(t.dataset.quill)
                                    : {}
                            };
                            new e(t, n)
                        })),
                        window.Quill = e
                    }))
                    .catch(console.warn)
                },
            9499: (e, t, n) => {
                "use strict";
                const i = document.querySelectorAll("[data-zxcvbn]");
                i.length && n
                    .e(923)
                    .then(n.t.bind(n, 1322, 23))
                    .then((({default: e}) => {
                        i.forEach((t => {
                            const n = {
                                    ratings: [
                                        "Very weak", "Weak", "OK", "Strong", "Very strong"
                                    ],
                                    allProgressBarClasses: [
                                        "bg-danger", "bg-warning", "bg-success"
                                    ],
                                    progressBarClasses: [
                                        "bg-danger", "bg-danger", "bg-warning", "bg-success", "bg-success"
                                    ],
                                    ...t.dataset.zxcvbn
                                        ? JSON.parse(t.dataset.zxcvbn)
                                        : {}
                                },
                                i = document.querySelector(n.input),
                                s = document.querySelector(n.text);
                            function o() {
                                if (i.value) {
                                    let o = e(i.value, []),
                                        r = 20 * (o.score + 1);
                                    t.style.width = r + "%",
                                    s.innerHTML = n.ratings[o.score],
                                    s.style.marginLeft = ".5rem",
                                    t
                                        .classList
                                        .remove(...n.allProgressBarClasses),
                                    t
                                        .classList
                                        .add(n.progressBarClasses[o.score])
                                } else 
                                    t.style.width = "0%",
                                    s.innerHTML = "",
                                    s.style.marginLeft = 0,
                                    t
                                        .classList
                                        .remove(...n.allProgressBarClasses)
                                }
                            o(),
                            i.addEventListener("keyup", (e => {
                                o()
                            }))
                        }))
                    }))
                    .catch(console.warn)
                }
        },
        o = {};
    function r(e) {
        var t = o[e];
        if (void 0 !== t) 
            return t.exports;
        var n = o[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return s[e].call(n.exports, n, n.exports, r),
        n.loaded = !0,
        n.exports
    }
    r.m = s,
    r.n = e => {
        var t = e && e.__esModule
            ? () => e.default
            : () => e;
        return r.d(t, {a: t}),
        t
    },
    t = Object.getPrototypeOf
        ? e => Object.getPrototypeOf(e)
        : e => e.__proto__,
    r.t = function (n, i) {
        if (1 & i && (n = this(n)), 8 & i) 
            return n;
        if ("object" == typeof n && n) {
            if (4 & i && n.__esModule) 
                return n;
            if (16 & i && "function" == typeof n.then) 
                return n
        }
        var s = Object.create(null);
        r.r(s);
        var o = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var a = 2 & i && n; "object" == typeof a && !~e.indexOf(a); a = t(a)) 
            Object
                .getOwnPropertyNames(a)
                .forEach((e => o[e] = () => n[e]));
        return o.default = () => n,
        r.d(s, o),
        s
    },
    r.d = (e, t) => {
        for (var n in t) 
            r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    },
    r.f = {},
    r.e = e => Promise.all(
        Object.keys(r.f).reduce(((t, n) => (r.f[n](e, t), t)), [])
    ),
    r.u = e => "./assets/js/" + {
        7: "highlightjs-bash",
        82: "jsvectormap",
        93: "list",
        125: "quill",
        191: "highlightjs-xml",
        230: "moment",
        248: "highlightjs-scss",
        341: "highlightjs-javascript",
        383: "helpers",
        399: "highlightjs",
        416: "picmo",
        427: "chart.js",
        462: "tom-select",
        482: "highlightjs-handlebars",
        483: "dragula",
        496: "highlightjs-linenumbers",
        522: "inputmask",
        539: "gumshoe",
        580: "fullcalendar.daygrid",
        613: "fullcalendar.bootstrap5",
        650: "dropzone",
        689: "fullcalendar.list",
        694: "flatpickr",
        756: "fullcalendar.interaction",
        773: "fullcalendar.core",
        840: "picmo.popup-picker",
        842: "fullcalendar.timegrid",
        923: "zxcvbn",
        997: "clipboard"
    }[e] + ".bundle.js",
    r.miniCssF = e => {},
    r.g = function () {
        if ("object" == typeof globalThis) 
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) 
                return window
        }
    }(),
    r.o = (e, t) => Object
        .prototype
        .hasOwnProperty
        .call(e, t),
    n = {},
    i = "dashly:",
    r.l = (e, t, s, o) => {
        if (n[e]) 
            n[e].push(t);
        else {
            var a,
                l;
            if (void 0 !== s) 
                for (var c = document.getElementsByTagName("script"), d = 0; d < c.length; d++) {
                    var u = c[d];
                    if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == i + s) {
                        a = u;
                        break
                    }
                }
            a || (
                l = !0,
                (a = document.createElement("script")).charset = "utf-8",
                a.timeout = 120,
                r.nc && a.setAttribute("nonce", r.nc),
                a.setAttribute("data-webpack", i + s),
                a.src = e
            ),
            n[e] = [t];
            var h = (t, i) => {
                    a.onerror = a.onload = null,
                    clearTimeout(p);
                    var s = n[e];
                    if (
                        delete n[e],
                        a.parentNode && a.parentNode.removeChild(a),
                        s && s.forEach((e => e(i))),
                        t
                    ) 
                        return t(i)
                },
                p = setTimeout(h.bind(null, void 0, {
                    type: "timeout",
                    target: a
                }), 12e4);
            a.onerror = h.bind(null, a.onerror),
            a.onload = h.bind(null, a.onload),
            l && document
                .head
                .appendChild(a)
        }
    },
    r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(
            e,
            Symbol.toStringTag,
            {value: "Module"}
        ),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    r.nmd = e => (e.paths = [], e.children || (e.children = []), e),
    (() => {
        var e;
        r.g.importScripts && (e = r.g.location + "");
        var t = r.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var n = t.getElementsByTagName("script");
            n.length && (e = n[n.length - 1].src)
        }
        if (!e) 
            throw new Error("Automatic publicPath is not supported in this browser");
        e = e
            .replace(/#.*$/, "")
            .replace(/\?.*$/, "")
            .replace(/\/[^\/]+$/, "/"),
        r.p = e + "../../"
    })(),
    (() => {
        r.b = document.baseURI || self.location.href;
        var e = {
            505: 0
        };
        r.f.j = (t, n) => {
            var i = r.o(e, t)
                ? e[t]
                : void 0;
            if (0 !== i) 
                if (i) 
                    n.push(i[2]);
                else {
                    var s = new Promise(((n, s) => i = e[t] = [n, s]));
                    n.push(i[2] = s);
                    var o = r.p + r.u(t),
                        a = new Error;
                    r.l(o, (n => {
                        if (r.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                            var s = n && (
                                    "load" === n.type
                                        ? "missing"
                                        : n.type
                                ),
                                o = n && n.target && n.target.src;
                            a.message = "Loading chunk " + t + " failed.\n(" + s + ": " + o + ")",
                            a.name = "ChunkLoadError",
                            a.type = s,
                            a.request = o,
                            i[1](a)
                        }
                    }), "chunk-" + t, t)
                }
            };
        var t = (t, n) => {
                var i,
                    s,
                    [o, a, l] = n,
                    c = 0;
                if (o.some((t => 0 !== e[t]))) {
                    for (i in a) 
                        r.o(a, i) && (r.m[i] = a[i]);
                    if (l) 
                        l(r)
                }
                for (t && t(n); c < o.length; c++) 
                    s = o[c],
                    r.o(e, s) && e[s] && e[s][0](),
                    e[s] = 0
            },
            n = self.webpackChunkdashly = self.webpackChunkdashly || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    })(),
    (() => {
        "use strict";
        if (document.getElementById("offcanvasCustomize") && "undefined" != typeof themeConfig) {
            Object
                .keys(themeConfig)
                .forEach((e => {
                    null === localStorage.getItem(e) && (localStorage[e] = themeConfig[e])
                }));
            const t = document.querySelectorAll("[data-theme-control]"),
                n = document.getElementById("resetThemeConfig"),
                i = document.getElementById("previewThemeConfig");
            t.forEach((e => {
                let t = e.dataset.themeControl;
                "radio" == e.type
                    ? e.checked = e.value == localStorage.getItem(t)
                    : e.checked = "true" === localStorage.getItem(t),
                e.addEventListener("change", (n => {
                    localStorage[t] = "radio" == e.type
                        ? n.target.value
                        : n.target.checked
                }))
            })),
            n.addEventListener("click", (t => {
                Object
                    .keys(themeConfig)
                    .forEach((t => {
                        localStorage[t] = themeConfig[t],
                        e()
                    }))
            })),
            i.addEventListener("click", (t => {
                e()
            }))
        }
        function e() {
            window.location = window.location.pathname
        }
    })(),
    (() => {
        "use strict";
        var e = {};
        r.r(e),
        r.d(e, {
            afterMain: () => w,
            afterRead: () => _,
            afterWrite: () => A,
            applyStyles: () => L,
            arrow: () => Q,
            auto: () => o,
            basePlacements: () => a,
            beforeMain: () => v,
            beforeRead: () => m,
            beforeWrite: () => E,
            bottom: () => n,
            clippingParents: () => d,
            computeStyles: () => te,
            createPopper: () => Le,
            createPopperBase: () => Oe,
            createPopperLite: () => Me,
            detectOverflow: () => be,
            end: () => c,
            eventListeners: () => ie,
            flip: () => _e,
            hide: () => we,
            left: () => s,
            main: () => y,
            modifierPhases: () => C,
            offset: () => Ee,
            placements: () => g,
            popper: () => h,
            popperGenerator: () => De,
            popperOffsets: () => ke,
            preventOverflow: () => Ae,
            read: () => b,
            reference: () => p,
            right: () => i,
            start: () => l,
            top: () => t,
            variationPlacements: () => f,
            viewport: () => u,
            write: () => k
        });
        var t = "top",
            n = "bottom",
            i = "right",
            s = "left",
            o = "auto",
            a = [
                t, n, i, s
            ],
            l = "start",
            c = "end",
            d = "clippingParents",
            u = "viewport",
            h = "popper",
            p = "reference",
            f = a.reduce((function (e, t) {
                return e.concat([
                    t + "-" + l,
                    t + "-" + c
                ])
            }), []),
            g = []
                .concat(a, [o])
                .reduce((function (e, t) {
                    return e.concat([
                        t, t + "-" + l,
                        t + "-" + c
                    ])
                }), []),
            m = "beforeRead",
            b = "read",
            _ = "afterRead",
            v = "beforeMain",
            y = "main",
            w = "afterMain",
            E = "beforeWrite",
            k = "write",
            A = "afterWrite",
            C = [
                m,
                b,
                _,
                v,
                y,
                w,
                E,
                k,
                A
            ];
        function T(e) {
            return e
                ? (e.nodeName || "").toLowerCase()
                : null
        }
        function x(e) {
            if (null == e) 
                return window;
            if ("[object Window]" !== e.toString()) {
                var t = e.ownerDocument;
                return t && t.defaultView || window
            }
            return e
        }
        function S(e) {
            return e instanceof x(e).Element || e instanceof Element
        }
        function D(e) {
            return e instanceof x(e).HTMLElement || e instanceof HTMLElement
        }
        function O(e) {
            return "undefined" != typeof ShadowRoot && (
                e instanceof x(e).ShadowRoot || e instanceof ShadowRoot
            )
        }
        const L = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function (e) {
                var t = e.state;
                Object
                    .keys(t.elements)
                    .forEach((function (e) {
                        var n = t.styles[e] || {},
                            i = t.attributes[e] || {},
                            s = t.elements[e];
                        D(s) && T(s) && (
                            Object.assign(s.style, n),
                            Object.keys(i).forEach((function (e) {
                                var t = i[e];
                                !1 === t
                                    ? s.removeAttribute(e)
                                    : s.setAttribute(
                                        e,
                                        !0 === t
                                            ? ""
                                            : t
                                    )
                            }))
                        )
                    }))
            },
            effect: function (e) {
                var t = e.state,
                    n = {
                        popper: {
                            position: t.options.strategy,
                            left: "0",
                            top: "0",
                            margin: "0"
                        },
                        arrow: {
                            position: "absolute"
                        },
                        reference: {}
                    };
                return Object.assign(t.elements.popper.style, n.popper),
                t.styles = n,
                t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                function () {
                    Object
                        .keys(t.elements)
                        .forEach((function (e) {
                            var i = t.elements[e],
                                s = t.attributes[e] || {},
                                o = Object
                                    .keys(
                                        t.styles.hasOwnProperty(e)
                                            ? t.styles[e]
                                            : n[e]
                                    )
                                    .reduce((function (e, t) {
                                        return e[t] = "",
                                        e
                                    }), {});
                            D(i) && T(i) && (
                                Object.assign(i.style, o),
                                Object.keys(s).forEach((function (e) {
                                    i.removeAttribute(e)
                                }))
                            )
                        }))
                }
            },
            requires: ["computeStyles"]
        };
        function M(e) {
            return e.split("-")[0]
        }
        var $ = Math.max,
            I = Math.min,
            N = Math.round;
        function j() {
            var e = navigator.userAgentData;
            return null != e && e.brands
                ? e
                    .brands
                    .map((function (e) {
                        return e.brand + "/" + e.version
                    }))
                    .join(" ")
                : navigator.userAgent
        }
        function P() {
            return !/^((?!chrome|android).)*safari/i.test(j())
        }
        function B(e, t, n) {
            void 0 === t && (t = !1),
            void 0 === n && (n = !1);
            var i = e.getBoundingClientRect(),
                s = 1,
                o = 1;
            t && D(e) && (
                s = e.offsetWidth > 0 && N(i.width) / e.offsetWidth || 1,
                o = e.offsetHeight > 0 && N(i.height) / e.offsetHeight || 1
            );
            var r = (
                    S(e)
                        ? x(e)
                        : window
                ).visualViewport,
                a = !P() && n,
                l = (i.left + (
                    a && r
                        ? r.offsetLeft
                        : 0
                )) / s,
                c = (i.top + (
                    a && r
                        ? r.offsetTop
                        : 0
                )) / o,
                d = i.width / s,
                u = i.height / o;
            return {
                width: d,
                height: u,
                top: c,
                right: l + d,
                bottom: c + u,
                left: l,
                x: l,
                y: c
            }
        }
        function q(e) {
            var t = B(e),
                n = e.offsetWidth,
                i = e.offsetHeight;
            return Math.abs(t.width - n) <= 1 && (n = t.width),
            Math.abs(t.height - i) <= 1 && (i = t.height), {
                x: e.offsetLeft,
                y: e.offsetTop,
                width: n,
                height: i
            }
        }
        function z(e, t) {
            var n = t.getRootNode && t.getRootNode();
            if (e.contains(t)) 
                return !0;
            if (n && O(n)) {
                var i = t;
                do {
                    if (i && e.isSameNode(i)) 
                        return !0;
                    i = i.parentNode || i.host
                } while (i)
            }
            return !1
        }
        function H(e) {
            return x(e).getComputedStyle(e)
        }
        function F(e) {
            return ["table", "td", "th"].indexOf(T(e)) >= 0
        }
        function Y(e) {
            return ((
                S(e)
                    ? e.ownerDocument
                    : e.document
            ) || window.document).documentElement
        }
        function Z(e) {
            return "html" === T(e)
                ? e
                : e.assignedSlot || e.parentNode || (
                    O(e)
                        ? e.host
                        : null
                ) || Y(e)
        }
        function W(e) {
            return D(e) && "fixed" !== H(e).position
                ? e.offsetParent
                : null
        }
        function R(e) {
            for (var t = x(e), n = W(e); n && F(n) && "static" === H(n).position;) 
                n = W(n);
            return n && ("html" === T(n) || "body" === T(n) && "static" === H(n).position)
                ? t
                : n || function (e) {
                    var t = /firefox/i.test(j());
                    if (/Trident/i.test(j()) && D(e) && "fixed" === H(e).position) 
                        return null;
                    var n = Z(e);
                    for (O(n) && (n = n.host); D(n) && ["html", "body"].indexOf(T(n)) < 0;) {
                        var i = H(n);
                        if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || t && "filter" === i.willChange || t && i.filter && "none" !== i.filter) 
                            return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
        }
        function J(e) {
            return ["top", "bottom"].indexOf(e) >= 0
                ? "x"
                : "y"
        }
        function V(e, t, n) {
            return $(e, I(t, n))
        }
        function U(e) {
            return Object.assign({}, {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }, e)
        }
        function K(e, t) {
            return t.reduce((function (t, n) {
                return t[n] = e,
                t
            }), {})
        }
        const Q = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var o,
                    r = e.state,
                    l = e.name,
                    c = e.options,
                    d = r.elements.arrow,
                    u = r.modifiersData.popperOffsets,
                    h = M(r.placement),
                    p = J(h),
                    f = [s, i].indexOf(h) >= 0
                        ? "height"
                        : "width";
                if (d && u) {
                    var g = function (e, t) {
                            return U(
                                "number" != typeof(
                                        e = "function" == typeof e
                                            ? e(Object.assign({}, t.rects, {placement: t.placement}))
                                            : e
                                    )
                                    ? e
                                    : K(e, a)
                            )
                        }(c.padding, r),
                        m = q(d),
                        b = "y" === p
                            ? t
                            : s,
                        _ = "y" === p
                            ? n
                            : i,
                        v = r
                            .rects
                            .reference[f] + r
                            .rects
                            .reference[p] - u[p] - r
                            .rects
                            .popper[f],
                        y = u[p] - r
                            .rects
                            .reference[p],
                        w = R(d),
                        E = w
                            ? "y" === p
                                ? w.clientHeight || 0
                                : w.clientWidth || 0
                            : 0,
                        k = v / 2 - y / 2,
                        A = g[b],
                        C = E - m[f] - g[_],
                        T = E / 2 - m[f] / 2 + k,
                        x = V(A, T, C),
                        S = p;
                    r.modifiersData[l] = ((o = {})[S] = x, o.centerOffset = x - T, o)
                }
            },
            effect: function (e) {
                var t = e.state,
                    n = e.options.element,
                    i = void 0 === n
                        ? "[data-popper-arrow]"
                        : n;
                null != i && ("string" != typeof i || (i = t.elements.popper.querySelector(i))) && z(
                    t.elements.popper,
                    i
                ) && (t.elements.arrow = i)
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
        };
        function X(e) {
            return e.split("-")[1]
        }
        var G = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };
        function ee(e) {
            var o,
                r = e.popper,
                a = e.popperRect,
                l = e.placement,
                d = e.variation,
                u = e.offsets,
                h = e.position,
                p = e.gpuAcceleration,
                f = e.adaptive,
                g = e.roundOffsets,
                m = e.isFixed,
                b = u.x,
                _ = void 0 === b
                    ? 0
                    : b,
                v = u.y,
                y = void 0 === v
                    ? 0
                    : v,
                w = "function" == typeof g
                    ? g({x: _, y})
                    : {
                        x: _,
                        y
                    };
            _ = w.x,
            y = w.y;
            var E = u.hasOwnProperty("x"),
                k = u.hasOwnProperty("y"),
                A = s,
                C = t,
                T = window;
            if (f) {
                var S = R(r),
                    D = "clientHeight",
                    O = "clientWidth";
                if (
                    S === x(r) && "static" !== H(S = Y(r)).position && "absolute" === h && (D = "scrollHeight", O = "scrollWidth"),
                    l === t || (l === s || l === i) && d === c
                ) 
                    C = n,
                    y -= (
                        m && S === T && T.visualViewport
                            ? T.visualViewport.height
                            : S[D]
                    ) - a.height,
                    y *= p
                        ? 1
                        : -1;
                if (l === s || (l === t || l === n) && d === c) 
                    A = i,
                    _ -= (
                        m && S === T && T.visualViewport
                            ? T.visualViewport.width
                            : S[O]
                    ) - a.width,
                    _ *= p
                        ? 1
                        : -1
                }
            var L,
                M = Object.assign({
                    position: h
                }, f && G),
                $ = !0 === g
                    ? function (e) {
                        var t = e.x,
                            n = e.y,
                            i = window.devicePixelRatio || 1;
                        return {
                            x: N(t * i) / i || 0,
                            y: N(n * i) / i || 0
                        }
                    }({x: _, y})
                    : {
                        x: _,
                        y
                    };
            return _ = $.x,
            y = $.y,
            p
                ? Object.assign({}, M, (
                    (L = {})[C] = k
                        ? "0"
                        : "",
                    L[A] = E
                        ? "0"
                        : "",
                    L.transform = (T.devicePixelRatio || 1) <= 1
                        ? "translate(" + _ + "px, " + y + "px)"
                        : "translate3d(" + _ + "px, " + y + "px, 0)",
                    L
                ))
                : Object.assign({}, M, (
                    (o = {})[C] = k
                        ? y + "px"
                        : "",
                    o[A] = E
                        ? _ + "px"
                        : "",
                    o.transform = "",
                    o
                ))
        }
        const te = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (e) {
                var t = e.state,
                    n = e.options,
                    i = n.gpuAcceleration,
                    s = void 0 === i || i,
                    o = n.adaptive,
                    r = void 0 === o || o,
                    a = n.roundOffsets,
                    l = void 0 === a || a,
                    c = {
                        placement: M(t.placement),
                        variation: X(t.placement),
                        popper: t.elements.popper,
                        popperRect: t.rects.popper,
                        gpuAcceleration: s,
                        isFixed: "fixed" === t.options.strategy
                    };
                null != t.modifiersData.popperOffsets && (
                    t.styles.popper = Object.assign({}, t.styles.popper, ee(Object.assign({}, c, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: r,
                        roundOffsets: l
                    })))
                ),
                null != t.modifiersData.arrow && (
                    t.styles.arrow = Object.assign({}, t.styles.arrow, ee(Object.assign({}, c, {
                        offsets: t.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: l
                    })))
                ),
                t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {"data-popper-placement": t.placement}
                )
            },
            data: {}
        };
        var ne = {
            passive: !0
        };
        const ie = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function () {},
            effect: function (e) {
                var t = e.state,
                    n = e.instance,
                    i = e.options,
                    s = i.scroll,
                    o = void 0 === s || s,
                    r = i.resize,
                    a = void 0 === r || r,
                    l = x(t.elements.popper),
                    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                return o && c.forEach((function (e) {
                    e.addEventListener("scroll", n.update, ne)
                })),
                a && l.addEventListener("resize", n.update, ne),
                function () {
                    o && c.forEach((function (e) {
                        e.removeEventListener("scroll", n.update, ne)
                    })),
                    a && l.removeEventListener("resize", n.update, ne)
                }
            },
            data: {}
        };
        var se = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        function oe(e) {
            return e.replace(/left|right|bottom|top/g, (function (e) {
                return se[e]
            }))
        }
        var re = {
            start: "end",
            end: "start"
        };
        function ae(e) {
            return e.replace(/start|end/g, (function (e) {
                return re[e]
            }))
        }
        function le(e) {
            var t = x(e);
            return {scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset}
        }
        function ce(e) {
            return B(Y(e)).left + le(e).scrollLeft
        }
        function de(e) {
            var t = H(e),
                n = t.overflow,
                i = t.overflowX,
                s = t.overflowY;
            return /auto|scroll|overlay|hidden/.test(n + s + i)
        }
        function ue(e) {
            return ["html", "body", "#document"].indexOf(T(e)) >= 0
                ? e.ownerDocument.body
                : D(e) && de(e)
                    ? e
                    : ue(Z(e))
        }
        function he(e, t) {
            var n;
            void 0 === t && (t = []);
            var i = ue(e),
                s = i === (
                    null == (n = e.ownerDocument)
                        ? void 0
                        : n.body
                ),
                o = x(i),
                r = s
                    ? [o].concat(
                        o.visualViewport || [],
                        de(i)
                            ? i
                            : []
                    )
                    : i,
                a = t.concat(r);
            return s
                ? a
                : a.concat(he(Z(r)))
        }
        function pe(e) {
            return Object.assign({}, e, {
                left: e.x,
                top: e.y,
                right: e.x + e.width,
                bottom: e.y + e.height
            })
        }
        function fe(e, t, n) {
            return t === u
                ? pe(function (e, t) {
                    var n = x(e),
                        i = Y(e),
                        s = n.visualViewport,
                        o = i.clientWidth,
                        r = i.clientHeight,
                        a = 0,
                        l = 0;
                    if (s) {
                        o = s.width,
                        r = s.height;
                        var c = P();
                        (c || !c && "fixed" === t) && (a = s.offsetLeft, l = s.offsetTop)
                    }
                    return {
                        width: o,
                        height: r,
                        x: a + ce(e),
                        y: l
                    }
                }(e, n))
                : S(t)
                    ? function (e, t) {
                        var n = B(e, !1, "fixed" === t);
                        return n.top = n.top + e.clientTop,
                        n.left = n.left + e.clientLeft,
                        n.bottom = n.top + e.clientHeight,
                        n.right = n.left + e.clientWidth,
                        n.width = e.clientWidth,
                        n.height = e.clientHeight,
                        n.x = n.left,
                        n.y = n.top,
                        n
                    }(t, n)
                    : pe(function (e) {
                        var t,
                            n = Y(e),
                            i = le(e),
                            s = null == (t = e.ownerDocument)
                                ? void 0
                                : t.body,
                            o = $(
                                n.scrollWidth,
                                n.clientWidth,
                                s
                                    ? s.scrollWidth
                                    : 0,
                                s
                                    ? s.clientWidth
                                    : 0
                            ),
                            r = $(
                                n.scrollHeight,
                                n.clientHeight,
                                s
                                    ? s.scrollHeight
                                    : 0,
                                s
                                    ? s.clientHeight
                                    : 0
                            ),
                            a = -i.scrollLeft + ce(e),
                            l = -i.scrollTop;
                        return "rtl" === H(s || n).direction && (a += $(
                            n.clientWidth,
                            s
                                ? s.clientWidth
                                : 0
                        ) - o), {
                            width: o,
                            height: r,
                            x: a,
                            y: l
                        }
                    }(Y(e)))
        }
        function ge(e, t, n, i) {
            var s = "clippingParents" === t
                    ? function (e) {
                        var t = he(Z(e)),
                            n = ["absolute", "fixed"].indexOf(H(e).position) >= 0 && D(e)
                                ? R(e)
                                : e;
                        return S(n)
                            ? t.filter((function (e) {
                                return S(e) && z(e, n) && "body" !== T(e)
                            }))
                            : []
                    }(e)
                    : [].concat(t),
                o = [].concat(s, [n]),
                r = o[0],
                a = o.reduce((function (t, n) {
                    var s = fe(e, n, i);
                    return t.top = $(s.top, t.top),
                    t.right = I(s.right, t.right),
                    t.bottom = I(s.bottom, t.bottom),
                    t.left = $(s.left, t.left),
                    t
                }), fe(e, r, i));
            return a.width = a.right - a.left,
            a.height = a.bottom - a.top,
            a.x = a.left,
            a.y = a.top,
            a
        }
        function me(e) {
            var o,
                r = e.reference,
                a = e.element,
                d = e.placement,
                u = d
                    ? M(d)
                    : null,
                h = d
                    ? X(d)
                    : null,
                p = r.x + r.width / 2 - a.width / 2,
                f = r.y + r.height / 2 - a.height / 2;
            switch (u) {
                case t:
                    o = {
                        x: p,
                        y: r.y - a.height
                    };
                    break;
                case n:
                    o = {
                        x: p,
                        y: r.y + r.height
                    };
                    break;
                case i:
                    o = {
                        x: r.x + r.width,
                        y: f
                    };
                    break;
                case s:
                    o = {
                        x: r.x - a.width,
                        y: f
                    };
                    break;
                default:
                    o = {
                        x: r.x,
                        y: r.y
                    }
            }
            var g = u
                ? J(u)
                : null;
            if (null != g) {
                var m = "y" === g
                    ? "height"
                    : "width";
                switch (h) {
                    case l:
                        o[g] = o[g] - (r[m] / 2 - a[m] / 2);
                        break;
                    case c:
                        o[g] = o[g] + (r[m] / 2 - a[m] / 2)
                }
            }
            return o
        }
        function be(e, s) {
            void 0 === s && (s = {});
            var o = s,
                r = o.placement,
                l = void 0 === r
                    ? e.placement
                    : r,
                c = o.strategy,
                f = void 0 === c
                    ? e.strategy
                    : c,
                g = o.boundary,
                m = void 0 === g
                    ? d
                    : g,
                b = o.rootBoundary,
                _ = void 0 === b
                    ? u
                    : b,
                v = o.elementContext,
                y = void 0 === v
                    ? h
                    : v,
                w = o.altBoundary,
                E = void 0 !== w && w,
                k = o.padding,
                A = void 0 === k
                    ? 0
                    : k,
                C = U(
                    "number" != typeof A
                        ? A
                        : K(A, a)
                ),
                T = y === h
                    ? p
                    : h,
                x = e.rects.popper,
                D = e.elements[
                    E
                        ? T
                        : y
                ],
                O = ge(
                    S(D)
                        ? D
                        : D.contextElement || Y(e.elements.popper),
                    m,
                    _,
                    f
                ),
                L = B(e.elements.reference),
                M = me({reference: L, element: x, strategy: "absolute", placement: l}),
                $ = pe(Object.assign({}, x, M)),
                I = y === h
                    ? $
                    : L,
                N = {
                    top: O.top - I.top + C.top,
                    bottom: I.bottom - O.bottom + C.bottom,
                    left: O.left - I.left + C.left,
                    right: I.right - O.right + C.right
                },
                j = e.modifiersData.offset;
            if (y === h && j) {
                var P = j[l];
                Object
                    .keys(N)
                    .forEach((function (e) {
                        var s = [i, n].indexOf(e) >= 0
                                ? 1
                                : -1,
                            o = [t, n].indexOf(e) >= 0
                                ? "y"
                                : "x";
                        N[e] += P[o] * s
                    }))
            }
            return N
        }
        const _e = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var r = e.state,
                    c = e.options,
                    d = e.name;
                if (!r.modifiersData[d]._skip) {
                    for (
                        var u = c.mainAxis,
                        h = void 0 === u || u,
                        p = c.altAxis,
                        m = void 0 === p || p,
                        b = c.fallbackPlacements,
                        _ = c.padding,
                        v = c.boundary,
                        y = c.rootBoundary,
                        w = c.altBoundary,
                        E = c.flipVariations,
                        k = void 0 === E || E,
                        A = c.allowedAutoPlacements,
                        C = r.options.placement,
                        T = M(C),
                        x = b || (
                            T === C || !k
                                ? [oe(C)]
                                : function (e) {
                                    if (M(e) === o) 
                                        return [];
                                    var t = oe(e);
                                    return [ae(e), t, ae(t)]
                                }(C)
                        ),
                        S = [C].concat(x).reduce((function (e, t) {
                            return e.concat(
                                M(t) === o
                                    ? function (e, t) {
                                        void 0 === t && (t = {});
                                        var n = t,
                                            i = n.placement,
                                            s = n.boundary,
                                            o = n.rootBoundary,
                                            r = n.padding,
                                            l = n.flipVariations,
                                            c = n.allowedAutoPlacements,
                                            d = void 0 === c
                                                ? g
                                                : c,
                                            u = X(i),
                                            h = u
                                                ? l
                                                    ? f
                                                    : f.filter((function (e) {
                                                        return X(e) === u
                                                    }))
                                                : a,
                                            p = h.filter((function (e) {
                                                return d.indexOf(e) >= 0
                                            }));
                                        0 === p.length && (p = h);
                                        var m = p.reduce((function (t, n) {
                                            return t[n] = be(e, {
                                                placement: n,
                                                boundary: s,
                                                rootBoundary: o,
                                                padding: r
                                            })[M(n)],
                                            t
                                        }), {});
                                        return Object
                                            .keys(m)
                                            .sort((function (e, t) {
                                                return m[e] - m[t]
                                            }))
                                    }(r, {
                                        placement: t,
                                        boundary: v,
                                        rootBoundary: y,
                                        padding: _,
                                        flipVariations: k,
                                        allowedAutoPlacements: A
                                    })
                                    : t
                            )
                        }), []),
                        D = r.rects.reference,
                        O = r.rects.popper,
                        L = new Map,
                        $ = !0,
                        I = S[0],
                        N = 0;
                        N < S.length;
                        N++
                    ) {
                        var j = S[N],
                            P = M(j),
                            B = X(j) === l,
                            q = [t, n].indexOf(P) >= 0,
                            z = q
                                ? "width"
                                : "height",
                            H = be(r, {
                                placement: j,
                                boundary: v,
                                rootBoundary: y,
                                altBoundary: w,
                                padding: _
                            }),
                            F = q
                                ? B
                                    ? i
                                    : s
                                : B
                                    ? n
                                    : t;
                        D[z] > O[z] && (F = oe(F));
                        var Y = oe(F),
                            Z = [];
                        if (
                            h && Z.push(H[P] <= 0),
                            m && Z.push(H[F] <= 0, H[Y] <= 0),
                            Z.every((function (e) {
                                return e
                            }))
                        ) {
                            I = j,
                            $ = !1;
                            break
                        }
                        L.set(j, Z)
                    }
                    if ($) 
                        for (
                            var W = function (e) {
                                var t = S.find((function (t) {
                                    var n = L.get(t);
                                    if (n) 
                                        return n
                                            .slice(0, e)
                                            .every((function (e) {
                                                return e
                                            }))
                                    }));
                                if (t) 
                                    return I = t,
                                    "break"
                            },
                            R = k
                                ? 3
                                : 1; R > 0; R--
                        ) {
                            if ("break" === W(R)) 
                                break
                        }
                    r.placement !== I && (
                        r.modifiersData[d]._skip = !0,
                        r.placement = I,
                        r.reset = !0
                    )
                }
            },
            requiresIfExists: ["offset"],
            data: {
                _skip: !1
            }
        };
        function ve(e, t, n) {
            return void 0 === n && (n = {
                x: 0,
                y: 0
            }), {
                top: e.top - t.height - n.y,
                right: e.right - t.width + n.x,
                bottom: e.bottom - t.height + n.y,
                left: e.left - t.width - n.x
            }
        }
        function ye(e) {
            return [t, i, n, s].some((function (t) {
                return e[t] >= 0
            }))
        }
        const we = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (e) {
                var t = e.state,
                    n = e.name,
                    i = t.rects.reference,
                    s = t.rects.popper,
                    o = t.modifiersData.preventOverflow,
                    r = be(t, {elementContext: "reference"}),
                    a = be(t, {
                        altBoundary: !0
                    }),
                    l = ve(r, i),
                    c = ve(a, s, o),
                    d = ye(l),
                    u = ye(c);
                t.modifiersData[n] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: c,
                    isReferenceHidden: d,
                    hasPopperEscaped: u
                },
                t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    "data-popper-reference-hidden": d,
                    "data-popper-escaped": u
                })
            }
        };
        const Ee = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function (e) {
                var n = e.state,
                    o = e.options,
                    r = e.name,
                    a = o.offset,
                    l = void 0 === a
                        ? [0, 0]
                        : a,
                    c = g.reduce((function (e, o) {
                        return e[o] = function (e, n, o) {
                            var r = M(e),
                                a = [s, t].indexOf(r) >= 0
                                    ? -1
                                    : 1,
                                l = "function" == typeof o
                                    ? o(Object.assign({}, n, {placement: e}))
                                    : o,
                                c = l[0],
                                d = l[1];
                            return c = c || 0,
                            d = (d || 0) * a,
                            [s, i].indexOf(r) >= 0
                                ? {
                                    x: d,
                                    y: c
                                }
                                : {
                                    x: c,
                                    y: d
                                }
                        }(o, n.rects, l),
                        e
                    }), {}),
                    d = c[n.placement],
                    u = d.x,
                    h = d.y;
                null != n.modifiersData.popperOffsets && (
                    n.modifiersData.popperOffsets.x += u,
                    n.modifiersData.popperOffsets.y += h
                ),
                n.modifiersData[r] = c
            }
        };
        const ke = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (e) {
                var t = e.state,
                    n = e.name;
                t.modifiersData[n] = me(
                    {reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement}
                )
            },
            data: {}
        };
        const Ae = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var o = e.state,
                    r = e.options,
                    a = e.name,
                    c = r.mainAxis,
                    d = void 0 === c || c,
                    u = r.altAxis,
                    h = void 0 !== u && u,
                    p = r.boundary,
                    f = r.rootBoundary,
                    g = r.altBoundary,
                    m = r.padding,
                    b = r.tether,
                    _ = void 0 === b || b,
                    v = r.tetherOffset,
                    y = void 0 === v
                        ? 0
                        : v,
                    w = be(o, {
                        boundary: p,
                        rootBoundary: f,
                        padding: m,
                        altBoundary: g
                    }),
                    E = M(o.placement),
                    k = X(o.placement),
                    A = !k,
                    C = J(E),
                    T = "x" === C
                        ? "y"
                        : "x",
                    x = o.modifiersData.popperOffsets,
                    S = o.rects.reference,
                    D = o.rects.popper,
                    O = "function" == typeof y
                        ? y(Object.assign({}, o.rects, {placement: o.placement}))
                        : y,
                    L = "number" == typeof O
                        ? {
                            mainAxis: O,
                            altAxis: O
                        }
                        : Object.assign({
                            mainAxis: 0,
                            altAxis: 0
                        }, O),
                    N = o.modifiersData.offset
                        ? o
                            .modifiersData
                            .offset[o.placement]
                        : null,
                    j = {
                        x: 0,
                        y: 0
                    };
                if (x) {
                    if (d) {
                        var P,
                            B = "y" === C
                                ? t
                                : s,
                            z = "y" === C
                                ? n
                                : i,
                            H = "y" === C
                                ? "height"
                                : "width",
                            F = x[C],
                            Y = F + w[B],
                            Z = F - w[z],
                            W = _
                                ? -D[H] / 2
                                : 0,
                            U = k === l
                                ? S[H]
                                : D[H],
                            K = k === l
                                ? -D[H]
                                : -S[H],
                            Q = o.elements.arrow,
                            G = _ && Q
                                ? q(Q)
                                : {
                                    width: 0,
                                    height: 0
                                },
                            ee = o.modifiersData["arrow#persistent"]
                                ? o
                                    .modifiersData["arrow#persistent"]
                                    .padding
                                : {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0
                                },
                            te = ee[B],
                            ne = ee[z],
                            ie = V(0, S[H], G[H]),
                            se = A
                                ? S[H] / 2 - W - ie - te - L.mainAxis
                                : U - ie - te - L.mainAxis,
                            oe = A
                                ? -S[H] / 2 + W + ie + ne + L.mainAxis
                                : K + ie + ne + L.mainAxis,
                            re = o.elements.arrow && R(o.elements.arrow),
                            ae = re
                                ? "y" === C
                                    ? re.clientTop || 0
                                    : re.clientLeft || 0
                                : 0,
                            le = null != (
                                P = null == N
                                    ? void 0
                                    : N[C]
                            )
                                ? P
                                : 0,
                            ce = F + oe - le,
                            de = V(
                                _
                                    ? I(Y, F + se - le - ae)
                                    : Y,
                                F,
                                _
                                    ? $(Z, ce)
                                    : Z
                            );
                        x[C] = de,
                        j[C] = de - F
                    }
                    if (h) {
                        var ue,
                            he = "x" === C
                                ? t
                                : s,
                            pe = "x" === C
                                ? n
                                : i,
                            fe = x[T],
                            ge = "y" === T
                                ? "height"
                                : "width",
                            me = fe + w[he],
                            _e = fe - w[pe],
                            ve = -1 !== [t, s].indexOf(E),
                            ye = null != (
                                ue = null == N
                                    ? void 0
                                    : N[T]
                            )
                                ? ue
                                : 0,
                            we = ve
                                ? me
                                : fe - S[ge] - D[ge] - ye + L.altAxis,
                            Ee = ve
                                ? fe + S[ge] + D[ge] - ye - L.altAxis
                                : _e,
                            ke = _ && ve
                                ? function (e, t, n) {
                                    var i = V(e, t, n);
                                    return i > n
                                        ? n
                                        : i
                                }(we, fe, Ee)
                                : V(
                                    _
                                        ? we
                                        : me,
                                    fe,
                                    _
                                        ? Ee
                                        : _e
                                );
                        x[T] = ke,
                        j[T] = ke - fe
                    }
                    o.modifiersData[a] = j
                }
            },
            requiresIfExists: ["offset"]
        };
        function Ce(e, t, n) {
            void 0 === n && (n = !1);
            var i,
                s,
                o = D(t),
                r = D(t) && function (e) {
                    var t = e.getBoundingClientRect(),
                        n = N(t.width) / e.offsetWidth || 1,
                        i = N(t.height) / e.offsetHeight || 1;
                    return 1 !== n || 1 !== i
                }(t),
                a = Y(t),
                l = B(e, r, n),
                c = {
                    scrollLeft: 0,
                    scrollTop: 0
                },
                d = {
                    x: 0,
                    y: 0
                };
            return (o || !o && !n) && (
                ("body" !== T(t) || de(a)) && (
                    c = (i = t) !== x(i) && D(i)
                        ? {
                            scrollLeft: (s = i).scrollLeft,
                            scrollTop: s.scrollTop
                        }
                        : le(i)
                ),
                D(t)
                    ? ((d = B(t, !0)).x += t.clientLeft, d.y += t.clientTop)
                    : a && (d.x = ce(a))
            ), {
                x: l.left + c.scrollLeft - d.x,
                y: l.top + c.scrollTop - d.y,
                width: l.width,
                height: l.height
            }
        }
        function Te(e) {
            var t = new Map,
                n = new Set,
                i = [];
            function s(e) {
                n.add(e.name),
                []
                    .concat(e.requires || [], e.requiresIfExists || [])
                    .forEach((function (e) {
                        if (!n.has(e)) {
                            var i = t.get(e);
                            i && s(i)
                        }
                    })),
                i.push(e)
            }
            return e.forEach((function (e) {
                t.set(e.name, e)
            })),
            e.forEach((function (e) {
                n.has(e.name) || s(e)
            })),
            i
        }
        var xe = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        };
        function Se() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) 
                t[n] = arguments[n];
            return !t.some((function (e) {
                return !(e && "function" == typeof e.getBoundingClientRect)
            }))
        }
        function De(e) {
            void 0 === e && (e = {});
            var t = e,
                n = t.defaultModifiers,
                i = void 0 === n
                    ? []
                    : n,
                s = t.defaultOptions,
                o = void 0 === s
                    ? xe
                    : s;
            return function (e, t, n) {
                void 0 === n && (n = o);
                var s,
                    r,
                    a = {
                        placement: "bottom",
                        orderedModifiers: [],
                        options: Object.assign({}, xe, o),
                        modifiersData: {},
                        elements: {
                            reference: e,
                            popper: t
                        },
                        attributes: {},
                        styles: {}
                    },
                    l = [],
                    c = !1,
                    d = {
                        state: a,
                        setOptions: function (n) {
                            var s = "function" == typeof n
                                ? n(a.options)
                                : n;
                            u(),
                            a.options = Object.assign({}, o, a.options, s),
                            a.scrollParents = {
                                reference: S(e)
                                    ? he(e)
                                    : e.contextElement
                                        ? he(e.contextElement)
                                        : [],
                                popper: he(t)
                            };
                            var r = function (e) {
                                var t = Te(e);
                                return C.reduce((function (e, n) {
                                    return e.concat(t.filter((function (e) {
                                        return e.phase === n
                                    })))
                                }), [])
                            }(function (e) {
                                var t = e.reduce((function (e, t) {
                                    var n = e[t.name];
                                    return e[t.name] = n
                                        ? Object.assign({}, n, t, {
                                            options: Object.assign({}, n.options, t.options),
                                            data: Object.assign({}, n.data, t.data)
                                        })
                                        : t,
                                    e
                                }), {});
                                return Object
                                    .keys(t)
                                    .map((function (e) {
                                        return t[e]
                                    }))
                            }([].concat(i, a.options.modifiers)));
                            return a.orderedModifiers = r.filter((function (e) {
                                return e.enabled
                            })),
                            a
                                .orderedModifiers
                                .forEach((function (e) {
                                    var t = e.name,
                                        n = e.options,
                                        i = void 0 === n
                                            ? {}
                                            : n,
                                        s = e.effect;
                                    if ("function" == typeof s) {
                                        var o = s({state: a, name: t, instance: d, options: i}),
                                            r = function () {};
                                        l.push(o || r)
                                    }
                                })),
                            d.update()
                        },
                        forceUpdate: function () {
                            if (!c) {
                                var e = a.elements,
                                    t = e.reference,
                                    n = e.popper;
                                if (Se(t, n)) {
                                    a.rects = {
                                        reference: Ce(t, R(n), "fixed" === a.options.strategy),
                                        popper: q(n)
                                    },
                                    a.reset = !1,
                                    a.placement = a.options.placement,
                                    a
                                        .orderedModifiers
                                        .forEach((function (e) {
                                            return a.modifiersData[e.name] = Object.assign({}, e.data)
                                        }));
                                    for (var i = 0; i < a.orderedModifiers.length; i++) 
                                        if (!0 !== a.reset) {
                                            var s = a.orderedModifiers[i],
                                                o = s.fn,
                                                r = s.options,
                                                l = void 0 === r
                                                    ? {}
                                                    : r,
                                                u = s.name;
                                            "function" == typeof o && (
                                                a = o({state: a, options: l, name: u, instance: d}) || a
                                            )
                                        }
                                    else 
                                        a.reset = !1,
                                        i = -1
                                }
                            }
                        },
                        update: (s = function () {
                            return new Promise((function (e) {
                                d.forceUpdate(),
                                e(a)
                            }))
                        }, function () {
                            return r || (r = new Promise((function (e) {
                                Promise
                                    .resolve()
                                    .then((function () {
                                        r = void 0,
                                        e(s())
                                    }))
                            }))),
                            r
                        }),
                        destroy: function () {
                            u(),
                            c = !0
                        }
                    };
                if (!Se(e, t)) 
                    return d;
                function u() {
                    l.forEach((function (e) {
                        return e()
                    })),
                    l = []
                }
                return d
                    .setOptions(n)
                    .then((function (e) {
                        !c && n.onFirstUpdate && n.onFirstUpdate(e)
                    })),
                d
            }
        }
        var Oe = De(),
            Le = De({
                defaultModifiers: [
                    ie,
                    ke,
                    te,
                    L,
                    Ee,
                    _e,
                    Ae,
                    Q,
                    we
                ]
            }),
            Me = De({
                defaultModifiers: [ie, ke, te, L]
            });
        const $e = "transitionend",
            Ie = e => {
                let t = e.getAttribute("data-bs-target");
                if (!t || "#" === t) {
                    let n = e.getAttribute("href");
                    if (!n || !n.includes("#") && !n.startsWith(".")) 
                        return null;
                    n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`),
                    t = n && "#" !== n
                        ? n.trim()
                        : null
                }
                return t
            },
            Ne = e => {
                const t = Ie(e);
                return t && document.querySelector(t)
                    ? t
                    : null
            },
            je = e => {
                const t = Ie(e);
                return t
                    ? document.querySelector(t)
                    : null
            },
            Pe = e => {
                e.dispatchEvent(new Event($e))
            },
            Be = e => !(!e || "object" != typeof e) && (
                void 0 !== e.jquery && (e = e[0]),
                void 0 !== e.nodeType
            ),
            qe = e => Be(e)
                ? e.jquery
                    ? e[0]
                    : e
                : "string" == typeof e && e.length > 0
                    ? document.querySelector(e)
                    : null,
            ze = e => {
                if (!Be(e) || 0 === e.getClientRects().length) 
                    return !1;
                const t = "visible" === getComputedStyle(e).getPropertyValue("visibility"),
                    n = e.closest("details:not([open])");
                if (!n) 
                    return t;
                if (n !== e) {
                    const t = e.closest("summary");
                    if (t && t.parentNode !== n) 
                        return !1;
                    if (null === t) 
                        return !1
                }
                return t
            },
            He = e => !e || e.nodeType !== Node.ELEMENT_NODE || (
                !!e.classList.contains("disabled") || (
                    void 0 !== e.disabled
                        ? e.disabled
                        : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")
                )
            ),
            Fe = e => {
                if (!document.documentElement.attachShadow) 
                    return null;
                if ("function" == typeof e.getRootNode) {
                    const t = e.getRootNode();
                    return t instanceof ShadowRoot
                        ? t
                        : null
                }
                return e instanceof ShadowRoot
                    ? e
                    : e.parentNode
                        ? Fe(e.parentNode)
                        : null
            },
            Ye = () => {},
            Ze = e => {
                e.offsetHeight
            },
            We = () => window.jQuery && !document
                .body
                .hasAttribute("data-bs-no-jquery")
                    ? window.jQuery
                    : null,
            Re = [],
            Je = () => "rtl" === document.documentElement.dir,
            Ve = e => {
                var t;
                t = () => {
                    const t = We();
                    if (t) {
                        const n = e.NAME,
                            i = t.fn[n];
                        t.fn[n] = e.jQueryInterface,
                        t
                            .fn[n]
                            .Constructor = e,
                        t
                            .fn[n]
                            .noConflict = () => (t.fn[n] = i, e.jQueryInterface)
                    }
                },
                "loading" === document.readyState
                    ? (Re.length || document.addEventListener("DOMContentLoaded", (() => {
                        for (const e of Re) 
                            e()
                    })), Re.push(t))
                    : t()
            },
            Ue = e => {
                "function" == typeof e && e()
            },
            Ke = (e, t, n = !0) => {
                if (!n) 
                    return void Ue(e);
                const i = (e => {
                    if (!e) 
                        return 0;
                    let {transitionDuration: t, transitionDelay: n} = window.getComputedStyle(e);
                    const i = Number.parseFloat(t),
                        s = Number.parseFloat(n);
                    return i || s
                        ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (
                            Number.parseFloat(t) + Number.parseFloat(n)
                        ))
                        : 0
                })(t) + 5;
                let s = !1;
                const o = ({target: n}) => {
                    n === t && (s = !0, t.removeEventListener($e, o), Ue(e))
                };
                t.addEventListener($e, o),
                setTimeout((() => {
                    s || Pe(t)
                }), i)
            },
            Qe = (e, t, n, i) => {
                const s = e.length;
                let o = e.indexOf(t);
                return -1 === o
                    ? !n && i
                        ? e[s - 1]
                        : e[0]
                    : (
                        o += n
                            ? 1
                            : -1,
                        i && (o = (o + s) % s),
                        e[Math.max(0, Math.min(o, s - 1))]
                    )
            },
            Xe = /[^.]*(?=\..*)\.|.*/,
            Ge = /\..*/,
            et = /::\d+$/,
            tt = {};
        let nt = 1;
        const it = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            },
            st = new Set([
                "click",
                "dblclick",
                "mouseup",
                "mousedown",
                "contextmenu",
                "mousewheel",
                "DOMMouseScroll",
                "mouseover",
                "mouseout",
                "mousemove",
                "selectstart",
                "selectend",
                "keydown",
                "keypress",
                "keyup",
                "orientationchange",
                "touchstart",
                "touchmove",
                "touchend",
                "touchcancel",
                "pointerdown",
                "pointermove",
                "pointerup",
                "pointerleave",
                "pointercancel",
                "gesturestart",
                "gesturechange",
                "gestureend",
                "focus",
                "blur",
                "change",
                "reset",
                "select",
                "submit",
                "focusin",
                "focusout",
                "load",
                "unload",
                "beforeunload",
                "resize",
                "move",
                "DOMContentLoaded",
                "readystatechange",
                "error",
                "abort",
                "scroll"
            ]);
        function ot(e, t) {
            return t && `${t}::${nt++}` || e.uidEvent || nt++
        }
        function rt(e) {
            const t = ot(e);
            return e.uidEvent = t,
            tt[t] = tt[t] || {},
            tt[t]
        }
        function at(e, t, n = null) {
            return Object
                .values(e)
                .find((e => e.callable === t && e.delegationSelector === n))
        }
        function lt(e, t, n) {
            const i = "string" == typeof t,
                s = i
                    ? n
                    : t || n;
            let o = ht(e);
            return st.has(o) || (o = e),
            [i, s, o]
        }
        function ct(e, t, n, i, s) {
            if ("string" != typeof t || !e) 
                return;
            let [o, r, a] = lt(t, n, i);
            if (t in it) {
                const e = e => function (t) {
                    if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) 
                        return e.call(this, t)
                };
                r = e(r)
            }
            const l = rt(e),
                c = l[a] || (l[a] = {}),
                d = at(
                    c,
                    r,
                    o
                        ? n
                        : null
                );
            if (d) 
                return void(d.oneOff = d.oneOff && s);
            const u = ot(r, t.replace(Xe, "")),
                h = o
                    ? function (e, t, n) {
                        return function i(s) {
                            const o = e.querySelectorAll(t);
                            for (let {target: r} = s; r && r !== this; r = r.parentNode) 
                                for (const a of o) 
                                    if (a === r) 
                                        return ft(s, {delegateTarget: r}),
                                        i.oneOff && pt.off(e, s.type, t, n),
                                        n.apply(r, [s])
                        }
                    }(e, n, r)
                    : function (e, t) {
                        return function n(i) {
                            return ft(i, {delegateTarget: e}),
                            n.oneOff && pt.off(e, i.type, t),
                            t.apply(e, [i])
                        }
                    }(e, r);
            h.delegationSelector = o
                ? n
                : null,
            h.callable = r,
            h.oneOff = s,
            h.uidEvent = u,
            c[u] = h,
            e.addEventListener(a, h, o)
        }
        function dt(e, t, n, i, s) {
            const o = at(t[n], i, s);
            o && (e.removeEventListener(n, o, Boolean(s)), delete t[n][o.uidEvent])
        }
        function ut(e, t, n, i) {
            const s = t[n] || {};
            for (const o of Object.keys(s)) 
                if (o.includes(i)) {
                    const i = s[o];
                    dt(e, t, n, i.callable, i.delegationSelector)
                }
            }
        function ht(e) {
            return e = e.replace(Ge, ""),
            it[e] || e
        }
        const pt = {
            on(e, t, n, i) {
                ct(e, t, n, i, !1)
            },
            one(e, t, n, i) {
                ct(e, t, n, i, !0)
            },
            off(e, t, n, i) {
                if ("string" != typeof t || !e) 
                    return;
                const [s, o, r] = lt(t, n, i),
                    a = r !== t,
                    l = rt(e),
                    c = l[r] || {},
                    d = t.startsWith(".");
                if (void 0 === o) {
                    if (d) 
                        for (const n of Object.keys(l)) 
                            ut(e, l, n, t.slice(1));
                for (const n of Object.keys(c)) {
                        const i = n.replace(et, "");
                        if (!a || t.includes(i)) {
                            const t = c[n];
                            dt(e, l, r, t.callable, t.delegationSelector)
                        }
                    }
                } else {
                    if (!Object.keys(c).length) 
                        return;
                    dt(
                        e,
                        l,
                        r,
                        o,
                        s
                            ? n
                            : null
                    )
                }
            },
            trigger(e, t, n) {
                if ("string" != typeof t || !e) 
                    return null;
                const i = We();
                let s = null,
                    o = !0,
                    r = !0,
                    a = !1;
                t !== ht(t) && i && (
                    s = i.Event(t, n),
                    i(e).trigger(s),
                    o = !s.isPropagationStopped(),
                    r = !s.isImmediatePropagationStopped(),
                    a = s.isDefaultPrevented()
                );
                let l = new Event(t, {
                    bubbles: o,
                    cancelable: !0
                });
                return l = ft(l, n),
                a && l.preventDefault(),
                r && e.dispatchEvent(l),
                l.defaultPrevented && s && s.preventDefault(),
                l
            }
        };
        function ft(e, t) {
            for (const [n, i] of Object.entries(t || {})) 
                try {
                    e[n] = i
                } catch (t) {
                    Object.defineProperty(e, n, {
                        configurable: !0,
                        get: () => i
                    })
                }
            return e
        }
        const gt = new Map,
            mt = {
                set(e, t, n) {
                    gt.has(e) || gt.set(e, new Map);
                    const i = gt.get(e);
                    i.has(t) || 0 === i.size
                        ? i.set(t, n)
                        : console.error(
                            `Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`
                        )
                },
                get: (e, t) => gt.has(e) && gt
                    .get(e)
                    .get(t) || null,
                remove(e, t) {
                    if (!gt.has(e)) 
                        return;
                    const n = gt.get(e);
                    n.delete(t),
                    0 === n.size && gt.delete(e)
                }
            };
        function bt(e) {
            if ("true" === e) 
                return !0;
            if ("false" === e) 
                return !1;
            if (e === Number(e).toString()) 
                return Number(e);
            if ("" === e || "null" === e) 
                return null;
            if ("string" != typeof e) 
                return e;
            try {
                return JSON.parse(decodeURIComponent(e))
            } catch (t) {
                return e
            }
        }
        function _t(e) {
            return e.replace(/[A-Z]/g, (e => `-${e.toLowerCase()}`))
        }
        const vt = {
            setDataAttribute(e, t, n) {
                e.setAttribute(`data-bs-${_t(t)}`, n)
            },
            removeDataAttribute(e, t) {
                e.removeAttribute(`data-bs-${_t(t)}`)
            },
            getDataAttributes(e) {
                if (!e) 
                    return {};
                const t = {},
                    n = Object
                        .keys(e.dataset)
                        .filter((e => e.startsWith("bs") && !e.startsWith("bsConfig")));
                for (const i of n) {
                    let n = i.replace(/^bs/, "");
                    n = n
                        .charAt(0)
                        .toLowerCase() + n.slice(1, n.length),
                    t[n] = bt(e.dataset[i])
                }
                return t
            },
            getDataAttribute: (e, t) => bt(e.getAttribute(`data-bs-${_t(t)}`))
        };
        class yt {
            static get Default() {
                return {}
            }
            static get DefaultType() {
                return {}
            }
            static get NAME() {
                throw new Error(
                    'You have to implement the static method "NAME", for each component!'
                )
            }
            _getConfig(e) {
                return e = this._mergeConfigObj(e),
                e = this._configAfterMerge(e),
                this._typeCheckConfig(e),
                e
            }
            _configAfterMerge(e) {
                return e
            }
            _mergeConfigObj(e, t) {
                const n = Be(t)
                    ? vt.getDataAttribute(t, "config")
                    : {};
                return {
                    ...this.constructor.Default,
                    ..."object" == typeof n
                        ? n
                        : {},
                    ...Be(t)
                        ? vt.getDataAttributes(t)
                        : {},
                    ..."object" == typeof e
                        ? e
                        : {}
                }
            }
            _typeCheckConfig(e, t = this.constructor.DefaultType) {
                for (const i of Object.keys(t)) {
                    const s = t[i],
                        o = e[i],
                        r = Be(o)
                            ? "element"
                            : null == (n = o)
                                ? `${n}`
                                : Object
                                    .prototype
                                    .toString
                                    .call(n)
                                    .match(/\s([a-z]+)/i)[1]
                                    .toLowerCase();
                    if (!new RegExp(s).test(r)) 
                        throw new TypeError(
                            `${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${s}".`
                        )
                }
                var n
            }
        }
        class wt extends yt {
            constructor(e, t) {
                super(),
                (e = qe(e)) && (
                    this._element = e,
                    this._config = this._getConfig(t),
                    mt.set(this._element, this.constructor.DATA_KEY, this)
                )
            }
            dispose() {
                mt.remove(this._element, this.constructor.DATA_KEY),
                pt.off(this._element, this.constructor.EVENT_KEY);
                for (const e of Object.getOwnPropertyNames(this)) 
                    this[e] = null
            }
            _queueCallback(e, t, n = !0) {
                Ke(e, t, n)
            }
            _getConfig(e) {
                return e = this._mergeConfigObj(e, this._element),
                e = this._configAfterMerge(e),
                this._typeCheckConfig(e),
                e
            }
            static getInstance(e) {
                return mt.get(qe(e), this.DATA_KEY)
            }
            static getOrCreateInstance(e, t = {}) {
                return this.getInstance(e) || new this(
                    e,
                    "object" == typeof t
                        ? t
                        : null
                )
            }
            static get VERSION() {
                return "5.2.3"
            }
            static get DATA_KEY() {
                return `bs.${this.NAME}`
            }
            static get EVENT_KEY() {
                return `.${this.DATA_KEY}`
            }
            static eventName(e) {
                return `${e}${this.EVENT_KEY}`
            }
        }
        const Et = (e, t = "hide") => {
                const n = `click.dismiss${e.EVENT_KEY}`,
                    i = e.NAME;
                pt.on(document, n, `[data-bs-dismiss="${i}"]`, (function (n) {
                    if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), He(this)) 
                        return;
                    const s = je(this) || this.closest(`.${i}`);
                    e.getOrCreateInstance(s)[t]()
                }))
            },
            kt = ".bs.alert",
            At = `close${kt}`,
            Ct = `closed${kt}`;
        class Tt extends wt {
            static get NAME() {
                return "alert"
            }
            close() {
                if (pt.trigger(this._element, At).defaultPrevented) 
                    return;
                this
                    ._element
                    .classList
                    .remove("show");
                const e = this
                    ._element
                    .classList
                    .contains("fade");
                this._queueCallback((() => this._destroyElement()), this._element, e)
            }
            _destroyElement() {
                this
                    ._element
                    .remove(),
                pt.trigger(this._element, Ct),
                this.dispose()
            }
            static jQueryInterface(e) {
                return this.each((function () {
                    const t = Tt.getOrCreateInstance(this);
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) 
                            throw new TypeError(`No method named "${e}"`);
                        t[e](this)
                    }
                }))
            }
        }
        Et(Tt, "close"),
        Ve(Tt);
        const xt = '[data-bs-toggle="button"]';
        class St extends wt {
            static get NAME() {
                return "button"
            }
            toggle() {
                this
                    ._element
                    .setAttribute("aria-pressed", this._element.classList.toggle("active"))
            }
            static jQueryInterface(e) {
                return this.each((function () {
                    const t = St.getOrCreateInstance(this);
                    "toggle" === e && t[e]()
                }))
            }
        }
        pt.on(document, "click.bs.button.data-api", xt, (e => {
            e.preventDefault();
            const t = e
                .target
                .closest(xt);
            St
                .getOrCreateInstance(t)
                .toggle()
        })),
        Ve(St);
        const Dt = {
                find: (e, t = document.documentElement) => [].concat(
                    ...Element.prototype.querySelectorAll.call(t, e)
                ),
                findOne: (e, t = document.documentElement) => Element
                    .prototype
                    .querySelector
                    .call(t, e),
                children: (e, t) => []
                    .concat(...e.children)
                    .filter((e => e.matches(t))),
                parents(e, t) {
                    const n = [];
                    let i = e
                        .parentNode
                        .closest(t);
                    for (; i;) 
                        n.push(i),
                        i = i
                            .parentNode
                            .closest(t);
                    return n
                },
                prev(e, t) {
                    let n = e.previousElementSibling;
                    for (; n;) {
                        if (n.matches(t)) 
                            return [n];
                        n = n.previousElementSibling
                    }
                    return []
                },
                next(e, t) {
                    let n = e.nextElementSibling;
                    for (; n;) {
                        if (n.matches(t)) 
                            return [n];
                        n = n.nextElementSibling
                    }
                    return []
                },
                focusableChildren(e) {
                    const t = [
                        "a",
                        "button",
                        "input",
                        "textarea",
                        "select",
                        "details",
                        "[tabindex]",
                        '[contenteditable="true"]'
                    ]
                        .map((e => `${e}:not([tabindex^="-"])`))
                        .join(",");
                    return this
                        .find(t, e)
                        .filter((e => !He(e) && ze(e)))
                }
            },
            Ot = ".bs.swipe",
            Lt = `touchstart${Ot}`,
            Mt = `touchmove${Ot}`,
            $t = `touchend${Ot}`,
            It = `pointerdown${Ot}`,
            Nt = `pointerup${Ot}`,
            jt = {
                endCallback: null,
                leftCallback: null,
                rightCallback: null
            },
            Pt = {
                endCallback: "(function|null)",
                leftCallback: "(function|null)",
                rightCallback: "(function|null)"
            };
        class Bt extends yt {
            constructor(e, t) {
                super(),
                this._element = e,
                e && Bt.isSupported() && (
                    this._config = this._getConfig(t),
                    this._deltaX = 0,
                    this._supportPointerEvents = Boolean(window.PointerEvent),
                    this._initEvents()
                )
            }
            static get Default() {
                return jt
            }
            static get DefaultType() {
                return Pt
            }
            static get NAME() {
                return "swipe"
            }
            dispose() {
                pt.off(this._element, Ot)
            }
            _start(e) {
                this._supportPointerEvents
                    ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX)
                    : this._deltaX = e
                        .touches[0]
                        .clientX
            }
            _end(e) {
                this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX),
                this._handleSwipe(),
                Ue(this._config.endCallback)
            }
            _move(e) {
                this._deltaX = e.touches && e.touches.length > 1
                    ? 0
                    : e
                        .touches[0]
                        .clientX - this._deltaX
            }
            _handleSwipe() {
                const e = Math.abs(this._deltaX);
                if (e <= 40) 
                    return;
                const t = e / this._deltaX;
                this._deltaX = 0,
                t && Ue(
                    t > 0
                        ? this._config.rightCallback
                        : this._config.leftCallback
                )
            }
            _initEvents() {
                this._supportPointerEvents
                    ? (
                        pt.on(this._element, It, (e => this._start(e))),
                        pt.on(this._element, Nt, (e => this._end(e))),
                        this._element.classList.add("pointer-event")
                    )
                    : (
                        pt.on(this._element, Lt, (e => this._start(e))),
                        pt.on(this._element, Mt, (e => this._move(e))),
                        pt.on(this._element, $t, (e => this._end(e)))
                    )
            }
            _eventIsPointerPenTouch(e) {
                return this._supportPointerEvents && (
                    "pen" === e.pointerType || "touch" === e.pointerType
                )
            }
            static isSupported() {
                return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
            }
        }
        const qt = ".bs.carousel",
            zt = ".data-api",
            Ht = "next",
            Ft = "prev",
            Yt = "left",
            Zt = "right",
            Wt = `slide${qt}`,
            Rt = `slid${qt}`,
            Jt = `keydown${qt}`,
            Vt = `mouseenter${qt}`,
            Ut = `mouseleave${qt}`,
            Kt = `dragstart${qt}`,
            Qt = `load${qt}${zt}`,
            Xt = `click${qt}${zt}`,
            Gt = "carousel",
            en = "active",
            tn = ".active",
            nn = ".carousel-item",
            sn = tn + nn,
            on = {
                ArrowLeft: Zt,
                ArrowRight: Yt
            },
            rn = {
                interval: 5e3,
                keyboard: !0,
                pause: "hover",
                ride: !1,
                touch: !0,
                wrap: !0
            },
            an = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                pause: "(string|boolean)",
                ride: "(boolean|string)",
                touch: "boolean",
                wrap: "boolean"
            };
        class ln extends wt {
            constructor(e, t) {
                super(e, t),
                this._interval = null,
                this._activeElement = null,
                this._isSliding = !1,
                this.touchTimeout = null,
                this._swipeHelper = null,
                this._indicatorsElement = Dt.findOne(".carousel-indicators", this._element),
                this._addEventListeners(),
                this._config.ride === Gt && this.cycle()
            }
            static get Default() {
                return rn
            }
            static get DefaultType() {
                return an
            }
            static get NAME() {
                return "carousel"
            }
            next() {
                this._slide(Ht)
            }
            nextWhenVisible() {
                !document.hidden && ze(this._element) && this.next()
            }
            prev() {
                this._slide(Ft)
            }
            pause() {
                this._isSliding && Pe(this._element),
                this._clearInterval()
            }
            cycle() {
                this._clearInterval(),
                this._updateInterval(),
                this._interval = setInterval(
                    (() => this.nextWhenVisible()),
                    this._config.interval
                )
            }
            _maybeEnableCycle() {
                this._config.ride && (
                    this._isSliding
                        ? pt.one(this._element, Rt, (() => this.cycle()))
                        : this.cycle()
                )
            }
            to(e) {
                const t = this._getItems();
                if (e > t.length - 1 || e < 0) 
                    return;
                if (this._isSliding) 
                    return void pt.one(this._element, Rt, (() => this.to(e)));
                const n = this._getItemIndex(this._getActive());
                if (n === e) 
                    return;
                const i = e > n
                    ? Ht
                    : Ft;
                this._slide(i, t[e])
            }
            dispose() {
                this._swipeHelper && this
                    ._swipeHelper
                    .dispose(),
                super.dispose()
            }
            _configAfterMerge(e) {
                return e.defaultInterval = e.interval,
                e
            }
            _addEventListeners() {
                this._config.keyboard && pt.on(this._element, Jt, (e => this._keydown(e))),
                "hover" === this._config.pause && (
                    pt.on(this._element, Vt, (() => this.pause())),
                    pt.on(this._element, Ut, (() => this._maybeEnableCycle()))
                ),
                this._config.touch && Bt.isSupported() && this._addTouchEventListeners()
            }
            _addTouchEventListeners() {
                for (const e of Dt.find(".carousel-item img", this._element)) 
                    pt.on(e, Kt, (e => e.preventDefault()));
                const e = {
                    leftCallback: () => this._slide(this._directionToOrder(Yt)),
                    rightCallback: () => this._slide(this._directionToOrder(Zt)),
                    endCallback: () => {
                        "hover" === this._config.pause && (
                            this.pause(),
                            this.touchTimeout && clearTimeout(this.touchTimeout),
                            this.touchTimeout = setTimeout((() => this._maybeEnableCycle()), 500 + this._config.interval)
                        )
                    }
                };
                this._swipeHelper = new Bt(this._element, e)
            }
            _keydown(e) {
                if (/input|textarea/i.test(e.target.tagName)) 
                    return;
                const t = on[e.key];
                t && (e.preventDefault(), this._slide(this._directionToOrder(t)))
            }
            _getItemIndex(e) {
                return this
                    ._getItems()
                    .indexOf(e)
            }
            _setActiveIndicatorElement(e) {
                if (!this._indicatorsElement) 
                    return;
                const t = Dt.findOne(tn, this._indicatorsElement);
                t
                    .classList
                    .remove(en),
                t.removeAttribute("aria-current");
                const n = Dt.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
                n && (n.classList.add(en), n.setAttribute("aria-current", "true"))
            }
            _updateInterval() {
                const e = this._activeElement || this._getActive();
                if (!e) 
                    return;
                const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
                this._config.interval = t || this._config.defaultInterval
            }
            _slide(e, t = null) {
                if (this._isSliding) 
                    return;
                const n = this._getActive(),
                    i = e === Ht,
                    s = t || Qe(this._getItems(), n, i, this._config.wrap);
                if (s === n) 
                    return;
                const o = this._getItemIndex(s),
                    r = t => pt.trigger(this._element, t, {
                        relatedTarget: s,
                        direction: this._orderToDirection(e),
                        from: this._getItemIndex(n),
                        to: o
                    });
                if (r(Wt).defaultPrevented) 
                    return;
                if (!n || !s) 
                    return;
                const a = Boolean(this._interval);
                this.pause(),
                this._isSliding = !0,
                this._setActiveIndicatorElement(o),
                this._activeElement = s;
                const l = i
                        ? "carousel-item-start"
                        : "carousel-item-end",
                    c = i
                        ? "carousel-item-next"
                        : "carousel-item-prev";
                s
                    .classList
                    .add(c),
                Ze(s),
                n
                    .classList
                    .add(l),
                s
                    .classList
                    .add(l);
                this._queueCallback((() => {
                    s
                        .classList
                        .remove(l, c),
                    s
                        .classList
                        .add(en),
                    n
                        .classList
                        .remove(en, c, l),
                    this._isSliding = !1,
                    r(Rt)
                }), n, this._isAnimated()),
                a && this.cycle()
            }
            _isAnimated() {
                return this
                    ._element
                    .classList
                    .contains("slide")
            }
            _getActive() {
                return Dt.findOne(sn, this._element)
            }
            _getItems() {
                return Dt.find(nn, this._element)
            }
            _clearInterval() {
                this._interval && (clearInterval(this._interval), this._interval = null)
            }
            _directionToOrder(e) {
                return Je()
                    ? e === Yt
                        ? Ft
                        : Ht
                    : e === Yt
                        ? Ht
                        : Ft
            }
            _orderToDirection(e) {
                return Je()
                    ? e === Ft
                        ? Yt
                        : Zt
                    : e === Ft
                        ? Zt
                        : Yt
            }
            static jQueryInterface(e) {
                return this.each((function () {
                    const t = ln.getOrCreateInstance(this, e);
                    if ("number" != typeof e) {
                        if ("string" == typeof e) {
                            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) 
                                throw new TypeError(`No method named "${e}"`);
                            t[e]()
                        }
                    } else 
                        t.to(e)
                }))
            }
        }
        pt.on(document, Xt, "[data-bs-slide], [data-bs-slide-to]", (function (e) {
            const t = je(this);
            if (!t || !t.classList.contains(Gt)) 
                return;
            e.preventDefault();
            const n = ln.getOrCreateInstance(t),
                i = this.getAttribute("data-bs-slide-to");
            return i
                ? (n.to(i), void n._maybeEnableCycle())
                : "next" === vt.getDataAttribute(this, "slide")
                    ? (n.next(), void n._maybeEnableCycle())
                    : (n.prev(), void n._maybeEnableCycle())
        })),
        pt.on(window, Qt, (() => {
            const e = Dt.find('[data-bs-ride="carousel"]');
            for (const t of e) 
                ln.getOrCreateInstance(t)
        })),
        Ve(ln);
        const cn = ".bs.collapse",
            dn = `show${cn}`,
            un = `shown${cn}`,
            hn = `hide${cn}`,
            pn = `hidden${cn}`,
            fn = `click${cn}.data-api`,
            gn = "show",
            mn = "collapse",
            bn = "collapsing",
            _n = `:scope .${mn} .${mn}`,
            vn = '[data-bs-toggle="collapse"]',
            yn = {
                parent: null,
                toggle: !0
            },
            wn = {
                parent: "(null|element)",
                toggle: "boolean"
            };
        class En extends wt {
            constructor(e, t) {
                super(e, t),
                this._isTransitioning = !1,
                this._triggerArray = [];
                const n = Dt.find(vn);
                for (const e of n) {
                    const t = Ne(e),
                        n = Dt
                            .find(t)
                            .filter((e => e === this._element));
                    null !== t && n.length && this
                        ._triggerArray
                        .push(e)
                }
                this._initializeChildren(),
                this._config.parent || this._addAriaAndCollapsedClass(
                    this._triggerArray,
                    this._isShown()
                ),
                this._config.toggle && this.toggle()
            }
            static get Default() {
                return yn
            }
            static get DefaultType() {
                return wn
            }
            static get NAME() {
                return "collapse"
            }
            toggle() {
                this._isShown()
                    ? this.hide()
                    : this.show()
            }
            show() {
                if (this._isTransitioning || this._isShown()) 
                    return;
                let e = [];
                if (
                    this._config.parent && (e = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((e => e !== this._element)).map((e => En.getOrCreateInstance(e, {
                        toggle: !1
                    })))),
                    e.length && e[0]._isTransitioning
                ) 
                    return;
                if (pt.trigger(this._element, dn).defaultPrevented) 
                    return;
                for (const t of e) 
                    t.hide();
                const t = this._getDimension();
                this
                    ._element
                    .classList
                    .remove(mn),
                this
                    ._element
                    .classList
                    .add(bn),
                this
                    ._element
                    .style[t] = 0,
                this._addAriaAndCollapsedClass(this._triggerArray, !0),
                this._isTransitioning = !0;
                const n = `scroll${t[0].toUpperCase() + t.slice(1)}`;
                this._queueCallback((() => {
                    this._isTransitioning = !1,
                    this
                        ._element
                        .classList
                        .remove(bn),
                    this
                        ._element
                        .classList
                        .add(mn, gn),
                    this
                        ._element
                        .style[t] = "",
                    pt.trigger(this._element, un)
                }), this._element, !0),
                this
                    ._element
                    .style[t] = `${this
                    ._element[n]}px`
            }
            hide() {
                if (this._isTransitioning || !this._isShown()) 
                    return;
                if (pt.trigger(this._element, hn).defaultPrevented) 
                    return;
                const e = this._getDimension();
                this
                    ._element
                    .style[e] = `${this
                    ._element
                    .getBoundingClientRect()[e]}px`,
                Ze(this._element),
                this
                    ._element
                    .classList
                    .add(bn),
                this
                    ._element
                    .classList
                    .remove(mn, gn);
                for (const e of this._triggerArray) {
                    const t = je(e);
                    t && !this._isShown(t) && this._addAriaAndCollapsedClass([e], !1)
                }
                this._isTransitioning = !0;
                this
                    ._element
                    .style[e] = "",
                this._queueCallback((() => {
                    this._isTransitioning = !1,
                    this
                        ._element
                        .classList
                        .remove(bn),
                    this
                        ._element
                        .classList
                        .add(mn),
                    pt.trigger(this._element, pn)
                }), this._element, !0)
            }
            _isShown(e = this._element) {
                return e
                    .classList
                    .contains(gn)
            }
            _configAfterMerge(e) {
                return e.toggle = Boolean(e.toggle),
                e.parent = qe(e.parent),
                e
            }
            _getDimension() {
                return this
                    ._element
                    .classList
                    .contains("collapse-horizontal")
                        ? "width"
                        : "height"
            }
            _initializeChildren() {
                if (!this._config.parent) 
                    return;
                const e = this._getFirstLevelChildren(vn);
                for (const t of e) {
                    const e = je(t);
                    e && this._addAriaAndCollapsedClass([t], this._isShown(e))
                }
            }
            _getFirstLevelChildren(e) {
                const t = Dt.find(_n, this._config.parent);
                return Dt
                    .find(e, this._config.parent)
                    .filter((e => !t.includes(e)))
            }
            _addAriaAndCollapsedClass(e, t) {
                if (e.length) 
                    for (const n of e) 
                        n
                            .classList
                            .toggle("collapsed", !t),
                        n.setAttribute("aria-expanded", t)
            }
            static jQueryInterface(e) {
                const t = {};
                return "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1),
                this.each((function () {
                    const n = En.getOrCreateInstance(this, t);
                    if ("string" == typeof e) {
                        if (void 0 === n[e]) 
                            throw new TypeError(`No method named "${e}"`);
                        n[e]()
                    }
                }))
            }
        }
        pt.on(document, fn, vn, (function (e) {
            (
                "A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName
            ) && e.preventDefault();
            const t = Ne(this),
                n = Dt.find(t);
            for (const e of n) 
                En
                    .getOrCreateInstance(e, {
                        toggle: !1
                    })
                    .toggle()
            })),
        Ve(En);
        const kn = "dropdown",
            An = ".bs.dropdown",
            Cn = ".data-api",
            Tn = "ArrowUp",
            xn = "ArrowDown",
            Sn = `hide${An}`,
            Dn = `hidden${An}`,
            On = `show${An}`,
            Ln = `shown${An}`,
            Mn = `click${An}${Cn}`,
            $n = `keydown${An}${Cn}`,
            In = `keyup${An}${Cn}`,
            Nn = "show",
            jn = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
            Pn = `${jn}.${Nn}`,
            Bn = ".dropdown-menu",
            qn = Je()
                ? "top-end"
                : "top-start",
            zn = Je()
                ? "top-start"
                : "top-end",
            Hn = Je()
                ? "bottom-end"
                : "bottom-start",
            Fn = Je()
                ? "bottom-start"
                : "bottom-end",
            Yn = Je()
                ? "left-start"
                : "right-start",
            Zn = Je()
                ? "right-start"
                : "left-start",
            Wn = {
                autoClose: !0,
                boundary: "clippingParents",
                display: "dynamic",
                offset: [
                    0, 2
                ],
                popperConfig: null,
                reference: "toggle"
            },
            Rn = {
                autoClose: "(boolean|string)",
                boundary: "(string|element)",
                display: "string",
                offset: "(array|string|function)",
                popperConfig: "(null|object|function)",
                reference: "(string|element|object)"
            };
        class Jn extends wt {
            constructor(e, t) {
                super(e, t),
                this._popper = null,
                this._parent = this._element.parentNode,
                this._menu = Dt.next(this._element, Bn)[0] || Dt.prev(this._element, Bn)[0] || Dt.findOne(
                    Bn,
                    this._parent
                ),
                this._inNavbar = this._detectNavbar()
            }
            static get Default() {
                return Wn
            }
            static get DefaultType() {
                return Rn
            }
            static get NAME() {
                return kn
            }
            toggle() {
                return this._isShown()
                    ? this.hide()
                    : this.show()
            }
            show() {
                if (He(this._element) || this._isShown()) 
                    return;
                const e = {
                    relatedTarget: this._element
                };
                if (!pt.trigger(this._element, On, e).defaultPrevented) {
                    if (
                        this._createPopper(),
                        "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")
                    ) 
                        for (const e of[].concat(...document.body.children)) 
                            pt.on(e, "mouseover", Ye);
                this
                        ._element
                        .focus(),
                    this
                        ._element
                        .setAttribute("aria-expanded", !0),
                    this
                        ._menu
                        .classList
                        .add(Nn),
                    this
                        ._element
                        .classList
                        .add(Nn),
                    pt.trigger(this._element, Ln, e)
                }
            }
            hide() {
                if (He(this._element) || !this._isShown()) 
                    return;
                const e = {
                    relatedTarget: this._element
                };
                this._completeHide(e)
            }
            dispose() {
                this._popper && this
                    ._popper
                    .destroy(),
                super.dispose()
            }
            update() {
                this._inNavbar = this._detectNavbar(),
                this._popper && this
                    ._popper
                    .update()
            }
            _completeHide(e) {
                if (!pt.trigger(this._element, Sn, e).defaultPrevented) {
                    if ("ontouchstart" in document.documentElement) 
                        for (const e of[].concat(...document.body.children)) 
                            pt.off(e, "mouseover", Ye);
                this._popper && this
                        ._popper
                        .destroy(),
                    this
                        ._menu
                        .classList
                        .remove(Nn),
                    this
                        ._element
                        .classList
                        .remove(Nn),
                    this
                        ._element
                        .setAttribute("aria-expanded", "false"),
                    vt.removeDataAttribute(this._menu, "popper"),
                    pt.trigger(this._element, Dn, e)
                }
            }
            _getConfig(e) {
                if ("object" == typeof(e = super._getConfig(e)).reference && !Be(e.reference) && "function" != typeof e.reference.getBoundingClientRect) 
                    throw new TypeError(
                        `${kn.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
                    );
                return e
            }
            _createPopper() {
                if (void 0 === e) 
                    throw new TypeError(
                        "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                    );
                let t = this._element;
                "parent" === this._config.reference
                    ? t = this._parent
                    : Be(this._config.reference)
                        ? t = qe(this._config.reference)
                        : "object" == typeof this._config.reference && (t = this._config.reference);
                const n = this._getPopperConfig();
                this._popper = Le(t, this._menu, n)
            }
            _isShown() {
                return this
                    ._menu
                    .classList
                    .contains(Nn)
            }
            _getPlacement() {
                const e = this._parent;
                if (e.classList.contains("dropend")) 
                    return Yn;
                if (e.classList.contains("dropstart")) 
                    return Zn;
                if (e.classList.contains("dropup-center")) 
                    return "top";
                if (e.classList.contains("dropdown-center")) 
                    return "bottom";
                const t = "end" === getComputedStyle(this._menu)
                    .getPropertyValue(
                        "--bs-position"
                    )
                    .trim();
                return e
                    .classList
                    .contains("dropup")
                        ? t
                            ? zn
                            : qn
                        : t
                            ? Fn
                            : Hn
            }
            _detectNavbar() {
                return null !== this
                    ._element
                    .closest(".navbar")
            }
            _getOffset() {
                const {offset: e} = this._config;
                return "string" == typeof e
                    ? e
                        .split(",")
                        .map((e => Number.parseInt(e, 10)))
                    : "function" == typeof e
                        ? t => e(t, this._element)
                        : e
            }
            _getPopperConfig() {
                const e = {
                    placement: this._getPlacement(),
                    modifiers: [
                        {
                            name: "preventOverflow",
                            options: {
                                boundary: this._config.boundary
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: this._getOffset()
                            }
                        }
                    ]
                };
                return (this._inNavbar || "static" === this._config.display) && (
                    vt.setDataAttribute(this._menu, "popper", "static"),
                    e.modifiers = [
                        {
                            name: "applyStyles",
                            enabled: !1
                        }
                    ]
                ), {
                    ...e,
                    ..."function" == typeof this._config.popperConfig
                        ? this
                            ._config
                            .popperConfig(e)
                        : this._config.popperConfig
                }
            }
            _selectMenuItem({key: e, target: t}) {
                const n = Dt
                    .find(
                        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                        this._menu
                    )
                    .filter((e => ze(e)));
                n.length && Qe(n, t, e === xn, !n.includes(t)).focus()
            }
            static jQueryInterface(e) {
                return this.each((function () {
                    const t = Jn.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e]) 
                            throw new TypeError(`No method named "${e}"`);
                        t[e]()
                    }
                }))
            }
            static clearMenus(e) {
                if (2 === e.button || "keyup" === e.type && "Tab" !== e.key) 
                    return;
                const t = Dt.find(Pn);
                for (const n of t) {
                    const t = Jn.getInstance(n);
                    if (!t || !1 === t._config.autoClose) 
                        continue;
                    const i = e.composedPath(),
                        s = i.includes(t._menu);
                    if (i.includes(t._element) || "inside" === t._config.autoClose && !s || "outside" === t._config.autoClose && s) 
                        continue;
                    if (t._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) 
                        continue;
                    const o = {
                        relatedTarget: t._element
                    };
                    "click" === e.type && (o.clickEvent = e),
                    t._completeHide(o)
                }
            }
            static dataApiKeydownHandler(e) {
                const t = /input|textarea/i.test(e.target.tagName),
                    n = "Escape" === e.key,
                    i = [Tn, xn].includes(e.key);
                if (!i && !n) 
                    return;
                if (t && !n) 
                    return;
                e.preventDefault();
                const s = this.matches(jn)
                        ? this
                        : Dt.prev(this, jn)[0] || Dt.next(this, jn)[0] || Dt.findOne(
                            jn,
                            e.delegateTarget.parentNode
                        ),
                    o = Jn.getOrCreateInstance(s);
                if (i) 
                    return e.stopPropagation(),
                    o.show(),
                    void o._selectMenuItem(e);
                o._isShown() && (e.stopPropagation(), o.hide(), s.focus())
            }
        }
        pt.on(document, $n, jn, Jn.dataApiKeydownHandler),
        pt.on(document, $n, Bn, Jn.dataApiKeydownHandler),
        pt.on(document, Mn, Jn.clearMenus),
        pt.on(document, In, Jn.clearMenus),
        pt.on(document, Mn, jn, (function (e) {
            e.preventDefault(),
            Jn
                .getOrCreateInstance(this)
                .toggle()
        })),
        Ve(Jn);
        const Vn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            Un = ".sticky-top",
            Kn = "padding-right",
            Qn = "margin-right";
        class Xn {
            constructor() {
                this._element = document.body
            }
            getWidth() {
                const e = document.documentElement.clientWidth;
                return Math.abs(window.innerWidth - e)
            }
            hide() {
                const e = this.getWidth();
                this._disableOverFlow(),
                this._setElementAttributes(this._element, Kn, (t => t + e)),
                this._setElementAttributes(Vn, Kn, (t => t + e)),
                this._setElementAttributes(Un, Qn, (t => t - e))
            }
            reset() {
                this._resetElementAttributes(this._element, "overflow"),
                this._resetElementAttributes(this._element, Kn),
                this._resetElementAttributes(Vn, Kn),
                this._resetElementAttributes(Un, Qn)
            }
            isOverflowing() {
                return this.getWidth() > 0
            }
            _disableOverFlow() {
                this._saveInitialAttribute(this._element, "overflow"),
                this._element.style.overflow = "hidden"
            }
            _setElementAttributes(e, t, n) {
                const i = this.getWidth();
                this._applyManipulationCallback(e, (e => {
                    if (e !== this._element && window.innerWidth > e.clientWidth + i) 
                        return;
                    this._saveInitialAttribute(e, t);
                    const s = window
                        .getComputedStyle(e)
                        .getPropertyValue(t);
                    e
                        .style
                        .setProperty(t, `${n(Number.parseFloat(s))}px`)
                }))
            }
            _saveInitialAttribute(e, t) {
                const n = e
                    .style
                    .getPropertyValue(t);
                n && vt.setDataAttribute(e, t, n)
            }
            _resetElementAttributes(e, t) {
                this._applyManipulationCallback(e, (e => {
                    const n = vt.getDataAttribute(e, t);
                    null !== n
                        ? (vt.removeDataAttribute(e, t), e.style.setProperty(t, n))
                        : e
                            .style
                            .removeProperty(t)
                }))
            }
            _applyManipulationCallback(e, t) {
                if (Be(e)) 
                    t(e);
                else 
                    for (const n of Dt.find(e, this._element)) 
                        t(n)
            }
        }
        const Gn = "backdrop",
            ei = "show",
            ti = `mousedown.bs.${Gn}`,
            ni = {
                className: "modal-backdrop",
                clickCallback: null,
                isAnimated: !1,
                isVisible: !0,
                rootElement: "body"
            },
            ii = {
                className: "string",
                clickCallback: "(function|null)",
                isAnimated: "boolean",
                isVisible: "boolean",
                rootElement: "(element|string)"
            };
        class si extends yt {
            constructor(e) {
                super(),
                this._config = this._getConfig(e),
                this._isAppended = !1,
                this._element = null
            }
            static get Default() {
                return ni
            }
            static get DefaultType() {
                return ii
            }
            static get NAME() {
                return Gn
            }
            show(e) {
                if (!this._config.isVisible) 
                    return void Ue(e);
                this._append();
                const t = this._getElement();
                this._config.isAnimated && Ze(t),
                t
                    .classList
                    .add(ei),
                this._emulateAnimation((() => {
                    Ue(e)
                }))
            }
            hide(e) {
                this._config.isVisible
                    ? (this._getElement().classList.remove(ei), this._emulateAnimation((() => {
                        this.dispose(),
                        Ue(e)
                    })))
                    : Ue(e)
            }
            dispose() {
                this._isAppended && (
                    pt.off(this._element, ti),
                    this._element.remove(),
                    this._isAppended = !1
                )
            }
            _getElement() {
                if (!this._element) {
                    const e = document.createElement("div");
                    e.className = this._config.className,
                    this._config.isAnimated && e
                        .classList
                        .add("fade"),
                    this._element = e
                }
                return this._element
            }
            _configAfterMerge(e) {
                return e.rootElement = qe(e.rootElement),
                e
            }
            _append() {
                if (this._isAppended) 
                    return;
                const e = this._getElement();
                this
                    ._config
                    .rootElement
                    .append(e),
                pt.on(e, ti, (() => {
                    Ue(this._config.clickCallback)
                })),
                this._isAppended = !0
            }
            _emulateAnimation(e) {
                Ke(e, this._getElement(), this._config.isAnimated)
            }
        }
        const oi = ".bs.focustrap",
            ri = `focusin${oi}`,
            ai = `keydown.tab${oi}`,
            li = "backward",
            ci = {
                autofocus: !0,
                trapElement: null
            },
            di = {
                autofocus: "boolean",
                trapElement: "element"
            };
        class ui extends yt {
            constructor(e) {
                super(),
                this._config = this._getConfig(e),
                this._isActive = !1,
                this._lastTabNavDirection = null
            }
            static get Default() {
                return ci
            }
            static get DefaultType() {
                return di
            }
            static get NAME() {
                return "focustrap"
            }
            activate() {
                this._isActive || (
                    this._config.autofocus && this._config.trapElement.focus(),
                    pt.off(document, oi),
                    pt.on(document, ri, (e => this._handleFocusin(e))),
                    pt.on(document, ai, (e => this._handleKeydown(e))),
                    this._isActive = !0
                )
            }
            deactivate() {
                this._isActive && (this._isActive = !1, pt.off(document, oi))
            }
            _handleFocusin(e) {
                const {trapElement: t} = this._config;
                if (e.target === document || e.target === t || t.contains(e.target)) 
                    return;
                const n = Dt.focusableChildren(t);
                0 === n.length
                    ? t.focus()
                    : this._lastTabNavDirection === li
                        ? n[n.length - 1].focus()
                        : n[0].focus()
            }
            _handleKeydown(e) {
                "Tab" === e.key && (
                    this._lastTabNavDirection = e.shiftKey
                        ? li
                        : "forward"
                )
            }
        }
        const hi = ".bs.modal",
            pi = `hide${hi}`,
            fi = `hidePrevented${hi}`,
            gi = `hidden${hi}`,
            mi = `show${hi}`,
            bi = `shown${hi}`,
            _i = `resize${hi}`,
            vi = `click.dismiss${hi}`,
            yi = `mousedown.dismiss${hi}`,
            wi = `keydown.dismiss${hi}`,
            Ei = `click${hi}.data-api`,
            ki = "modal-open",
            Ai = "show",
            Ci = "modal-static",
            Ti = {
                backdrop: !0,
                focus: !0,
                keyboard: !0
            },
            xi = {
                backdrop: "(boolean|string)",
                focus: "boolean",
                keyboard: "boolean"
            };
        class Si extends wt {
            constructor(e, t) {
                super(e, t),
                this._dialog = Dt.findOne(".modal-dialog", this._element),
                this._backdrop = this._initializeBackDrop(),
                this._focustrap = this._initializeFocusTrap(),
                this._isShown = !1,
                this._isTransitioning = !1,
                this._scrollBar = new Xn,
                this._addEventListeners()
            }
            static get Default() {
                return Ti
            }
            static get DefaultType() {
                return xi
            }
            static get NAME() {
                return "modal"
            }
            toggle(e) {
                return this._isShown
                    ? this.hide()
                    : this.show(e)
            }
            show(e) {
                if (this._isShown || this._isTransitioning) 
                    return;
                pt
                    .trigger(this._element, mi, {relatedTarget: e})
                    .defaultPrevented || (
                        this._isShown = !0,
                        this._isTransitioning = !0,
                        this._scrollBar.hide(),
                        document.body.classList.add(ki),
                        this._adjustDialog(),
                        this._backdrop.show((() => this._showElement(e)))
                    )
            }
            hide() {
                if (!this._isShown || this._isTransitioning) 
                    return;
                pt
                    .trigger(this._element, pi)
                    .defaultPrevented || (
                        this._isShown = !1,
                        this._isTransitioning = !0,
                        this._focustrap.deactivate(),
                        this._element.classList.remove(Ai),
                        this._queueCallback((() => this._hideModal()), this._element, this._isAnimated())
                    )
            }
            dispose() {
                for (const e of[window, this._dialog]) 
                    pt.off(e, hi);
                this
                    ._backdrop
                    .dispose(),
                this
                    ._focustrap
                    .deactivate(),
                super.dispose()
            }
            handleUpdate() {
                this._adjustDialog()
            }
            _initializeBackDrop() {
                return new si({
                    isVisible: Boolean(this._config.backdrop),
                    isAnimated: this._isAnimated()
                })
            }
            _initializeFocusTrap() {
                return new ui({trapElement: this._element})
            }
            _showElement(e) {
                document
                    .body
                    .contains(this._element) || document
                    .body
                    .append(this._element),
                this._element.style.display = "block",
                this
                    ._element
                    .removeAttribute("aria-hidden"),
                this
                    ._element
                    .setAttribute("aria-modal", !0),
                this
                    ._element
                    .setAttribute("role", "dialog"),
                this._element.scrollTop = 0;
                const t = Dt.findOne(".modal-body", this._dialog);
                t && (t.scrollTop = 0),
                Ze(this._element),
                this
                    ._element
                    .classList
                    .add(Ai);
                this._queueCallback((() => {
                    this._config.focus && this
                        ._focustrap
                        .activate(),
                    this._isTransitioning = !1,
                    pt.trigger(this._element, bi, {relatedTarget: e})
                }), this._dialog, this._isAnimated())
            }
            _addEventListeners() {
                pt.on(this._element, wi, (e => {
                    if ("Escape" === e.key) 
                        return this._config.keyboard
                            ? (e.preventDefault(), void this.hide())
                            : void this._triggerBackdropTransition()
                    })),
                pt.on(window, _i, (() => {
                    this._isShown && !this._isTransitioning && this._adjustDialog()
                })),
                pt.on(this._element, yi, (e => {
                    pt.one(this._element, vi, (t => {
                        this._element === e.target && this._element === t.target && (
                            "static" !== this._config.backdrop
                                ? this._config.backdrop && this.hide()
                                : this._triggerBackdropTransition()
                        )
                    }))
                }))
            }
            _hideModal() {
                this._element.style.display = "none",
                this
                    ._element
                    .setAttribute("aria-hidden", !0),
                this
                    ._element
                    .removeAttribute("aria-modal"),
                this
                    ._element
                    .removeAttribute("role"),
                this._isTransitioning = !1,
                this
                    ._backdrop
                    .hide((() => {
                        document
                            .body
                            .classList
                            .remove(ki),
                        this._resetAdjustments(),
                        this
                            ._scrollBar
                            .reset(),
                        pt.trigger(this._element, gi)
                    }))
            }
            _isAnimated() {
                return this
                    ._element
                    .classList
                    .contains("fade")
            }
            _triggerBackdropTransition() {
                if (pt.trigger(this._element, fi).defaultPrevented) 
                    return;
                const e = this._element.scrollHeight > document.documentElement.clientHeight,
                    t = this._element.style.overflowY;
                "hidden" === t || this
                    ._element
                    .classList
                    .contains(Ci) || (
                        e || (this._element.style.overflowY = "hidden"),
                        this._element.classList.add(Ci),
                        this._queueCallback((() => {
                        this
                            ._element
                            .classList
                            .remove(Ci),
                        this._queueCallback((() => {
                            this._element.style.overflowY = t
                        }), this._dialog)
                    }), this._dialog),
                        this._element.focus()
                    )
            }
            _adjustDialog() {
                const e = this._element.scrollHeight > document.documentElement.clientHeight,
                    t = this
                        ._scrollBar
                        .getWidth(),
                    n = t > 0;
                if (n && !e) {
                    const e = Je()
                        ? "paddingLeft"
                        : "paddingRight";
                    this
                        ._element
                        .style[e] = `${t}px`
                }
                if (!n && e) {
                    const e = Je()
                        ? "paddingRight"
                        : "paddingLeft";
                    this
                        ._element
                        .style[e] = `${t}px`
                }
            }
            _resetAdjustments() {
                this._element.style.paddingLeft = "",
                this._element.style.paddingRight = ""
            }
            static jQueryInterface(e, t) {
                return this.each((function () {
                    const n = Si.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === n[e]) 
                            throw new TypeError(`No method named "${e}"`);
                        n[e](t)
                    }
                }))
            }
        }
        pt.on(document, Ei, '[data-bs-toggle="modal"]', (function (e) {
            const t = je(this);
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
            pt.one(t, mi, (e => {
                e.defaultPrevented || pt.one(t, gi, (() => {
                    ze(this) && this.focus()
                }))
            }));
            const n = Dt.findOne(".modal.show");
            n && Si
                .getInstance(n)
                .hide();
            Si
                .getOrCreateInstance(t)
                .toggle(this)
        })),
        Et(Si),
        Ve(Si);
        const Di = ".bs.offcanvas",
            Oi = ".data-api",
            Li = `load${Di}${Oi}`,
            Mi = "show",
            $i = "showing",
            Ii = "hiding",
            Ni = ".offcanvas.show",
            ji = `show${Di}`,
            Pi = `shown${Di}`,
            Bi = `hide${Di}`,
            qi = `hidePrevented${Di}`,
            zi = `hidden${Di}`,
            Hi = `resize${Di}`,
            Fi = `click${Di}${Oi}`,
            Yi = `keydown.dismiss${Di}`,
            Zi = {
                backdrop: !0,
                keyboard: !0,
                scroll: !1
            },
            Wi = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                scroll: "boolean"
            };
        class Ri extends wt {
            constructor(e, t) {
                super(e, t),
                this._isShown = !1,
                this._backdrop = this._initializeBackDrop(),
                this._focustrap = this._initializeFocusTrap(),
                this._addEventListeners()
            }
            static get Default() {
                return Zi
            }
            static get DefaultType() {
                return Wi
            }
            static get NAME() {
                return "offcanvas"
            }
            toggle(e) {
                return this._isShown
                    ? this.hide()
                    : this.show(e)
            }
            show(e) {
                if (this._isShown) 
                    return;
                if (pt.trigger(this._element, ji, {relatedTarget: e}).defaultPrevented) 
                    return;
                this._isShown = !0,
                this
                    ._backdrop
                    .show(),
                this._config.scroll || (new Xn).hide(),
                this
                    ._element
                    .setAttribute("aria-modal", !0),
                this
                    ._element
                    .setAttribute("role", "dialog"),
                this
                    ._element
                    .classList
                    .add($i);
                this._queueCallback((() => {
                    this._config.scroll && !this._config.backdrop || this
                        ._focustrap
                        .activate(),
                    this
                        ._element
                        .classList
                        .add(Mi),
                    this
                        ._element
                        .classList
                        .remove($i),
                    pt.trigger(this._element, Pi, {relatedTarget: e})
                }), this._element, !0)
            }
            hide() {
                if (!this._isShown) 
                    return;
                if (pt.trigger(this._element, Bi).defaultPrevented) 
                    return;
                this
                    ._focustrap
                    .deactivate(),
                this
                    ._element
                    .blur(),
                this._isShown = !1,
                this
                    ._element
                    .classList
                    .add(Ii),
                this
                    ._backdrop
                    .hide();
                this._queueCallback((() => {
                    this
                        ._element
                        .classList
                        .remove(Mi, Ii),
                    this
                        ._element
                        .removeAttribute("aria-modal"),
                    this
                        ._element
                        .removeAttribute("role"),
                    this._config.scroll || (new Xn).reset(),
                    pt.trigger(this._element, zi)
                }), this._element, !0)
            }
            dispose() {
                this
                    ._backdrop
                    .dispose(),
                this
                    ._focustrap
                    .deactivate(),
                super.dispose()
            }
            _initializeBackDrop() {
                const e = Boolean(this._config.backdrop);
                return new si({
                    className: "offcanvas-backdrop",
                    isVisible: e,
                    isAnimated: !0,
                    rootElement: this._element.parentNode,
                    clickCallback: e
                        ? () => {
                            "static" !== this._config.backdrop
                                ? this.hide()
                                : pt.trigger(this._element, qi)
                        }
                        : null
                })
            }
            _initializeFocusTrap() {
                return new ui({trapElement: this._element})
            }
            _addEventListeners() {
                pt.on(this._element, Yi, (e => {
                    "Escape" === e.key && (
                        this._config.keyboard
                            ? this.hide()
                            : pt.trigger(this._element, qi)
                    )
                }))
            }
            static jQueryInterface(e) {
                return this.each((function () {
                    const t = Ri.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) 
                            throw new TypeError(`No method named "${e}"`);
                        t[e](this)
                    }
                }))
            }
        }
        pt.on(document, Fi, '[data-bs-toggle="offcanvas"]', (function (e) {
            const t = je(this);
            if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), He(this)) 
                return;
            pt.one(t, zi, (() => {
                ze(this) && this.focus()
            }));
            const n = Dt.findOne(Ni);
            n && n !== t && Ri
                .getInstance(n)
                .hide();
            Ri
                .getOrCreateInstance(t)
                .toggle(this)
        })),
        pt.on(window, Li, (() => {
            for (const e of Dt.find(Ni)) 
                Ri
                    .getOrCreateInstance(e)
                    .show()
            })),
        pt.on(window, Hi, (() => {
            for (const e of Dt.find("[aria-modal][class*=show][class*=offcanvas-]")) 
                "fixed" !== getComputedStyle(e).position && Ri
                    .getOrCreateInstance(e)
                    .hide()
            })),
        Et(Ri),
        Ve(Ri);
        const Ji = new Set([
                "background",
                "cite",
                "href",
                "itemtype",
                "longdesc",
                "poster",
                "src",
                "xlink:href"
            ]),
            Vi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
            Ui = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
            Ki = (e, t) => {
                const n = e
                    .nodeName
                    .toLowerCase();
                return t.includes(n)
                    ? !Ji.has(n) || Boolean(Vi.test(e.nodeValue) || Ui.test(e.nodeValue))
                    : t
                        .filter((e => e instanceof RegExp))
                        .some((e => e.test(n)))
            },
            Qi = {
                "*": [
                    "class",
                    "dir",
                    "id",
                    "lang",
                    "role",
                    /^aria-[\w-]*$/i
                ],
                a: [
                    "target", "href", "title", "rel"
                ],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: [
                    "src",
                    "srcset",
                    "alt",
                    "title",
                    "width",
                    "height"
                ],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            };
        const Xi = {
                allowList: Qi,
                content: {},
                extraClass: "",
                html: !1,
                sanitize: !0,
                sanitizeFn: null,
                template: "<div></div>"
            },
            Gi = {
                allowList: "object",
                content: "object",
                extraClass: "(string|function)",
                html: "boolean",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                template: "string"
            },
            es = {
                entry: "(string|element|function|null)",
                selector: "(string|element)"
            };
        class ts extends yt {
            constructor(e) {
                super(),
                this._config = this._getConfig(e)
            }
            static get Default() {
                return Xi
            }
            static get DefaultType() {
                return Gi
            }
            static get NAME() {
                return "TemplateFactory"
            }
            getContent() {
                return Object
                    .values(this._config.content)
                    .map((e => this._resolvePossibleFunction(e)))
                    .filter(Boolean)
            }
            hasContent() {
                return this
                    .getContent()
                    .length > 0
            }
            changeContent(e) {
                return this._checkContent(e),
                this._config.content = {
                    ...this._config.content,
                    ...e
                },
                this
            }
            toHtml() {
                const e = document.createElement("div");
                e.innerHTML = this._maybeSanitize(this._config.template);
                for (const [t, n] of Object.entries(this._config.content)) 
                    this._setContent(e, n, t);
                const t = e.children[0],
                    n = this._resolvePossibleFunction(this._config.extraClass);
                return n && t
                    .classList
                    .add(...n.split(" ")),
                t
            }
            _typeCheckConfig(e) {
                super._typeCheckConfig(e),
                this._checkContent(e.content)
            }
            _checkContent(e) {
                for (const [t, n] of Object.entries(e)) 
                    super._typeCheckConfig({
                        selector: t,
                        entry: n
                    }, es)
            }
            _setContent(e, t, n) {
                const i = Dt.findOne(n, e);
                i && (
                    (t = this._resolvePossibleFunction(t))
                        ? Be(t)
                            ? this._putElementInTemplate(qe(t), i)
                            : this._config.html
                                ? i.innerHTML = this._maybeSanitize(t)
                                : i.textContent = t
                        : i.remove()
                )
            }
            _maybeSanitize(e) {
                return this._config.sanitize
                    ? function (e, t, n) {
                        if (!e.length) 
                            return e;
                        if (n && "function" == typeof n) 
                            return n(e);
                        const i = (new window.DOMParser).parseFromString(e, "text/html"),
                            s = [].concat(...i.body.querySelectorAll("*"));
                        for (const e of s) {
                            const n = e
                                .nodeName
                                .toLowerCase();
                            if (!Object.keys(t).includes(n)) {
                                e.remove();
                                continue
                            }
                            const i = [].concat(...e.attributes),
                                s = [].concat(t["*"] || [], t[n] || []);
                            for (const t of i) 
                                Ki(t, s) || e.removeAttribute(t.nodeName)
                        }
                        return i.body.innerHTML
                    }(e, this._config.allowList, this._config.sanitizeFn)
                    : e
            }
            _resolvePossibleFunction(e) {
                return "function" == typeof e
                    ? e(this)
                    : e
            }
            _putElementInTemplate(e, t) {
                if (this._config.html) 
                    return t.innerHTML = "",
                    void t.append(e);
                t.textContent = e.textContent
            }
        }
        const ns = new Set(["sanitize", "allowList", "sanitizeFn"]),
            is = "fade",
            ss = "show",
            os = ".modal",
            rs = "hide.bs.modal",
            as = "hover",
            ls = "focus",
            cs = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: Je()
                    ? "left"
                    : "right",
                BOTTOM: "bottom",
                LEFT: Je()
                    ? "right"
                    : "left"
            },
            ds = {
                allowList: Qi,
                animation: !0,
                boundary: "clippingParents",
                container: !1,
                customClass: "",
                delay: 0,
                fallbackPlacements: [
                    "top", "right", "bottom", "left"
                ],
                html: !1,
                offset: [
                    0, 0
                ],
                placement: "top",
                popperConfig: null,
                sanitize: !0,
                sanitizeFn: null,
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div clas' +
                        's="tooltip-inner"></div></div>',
                title: "",
                trigger: "hover focus"
            },
            us = {
                allowList: "object",
                animation: "boolean",
                boundary: "(string|element)",
                container: "(string|element|boolean)",
                customClass: "(string|function)",
                delay: "(number|object)",
                fallbackPlacements: "array",
                html: "boolean",
                offset: "(array|string|function)",
                placement: "(string|function)",
                popperConfig: "(null|object|function)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                selector: "(string|boolean)",
                template: "string",
                title: "(string|element|function)",
                trigger: "string"
            };
        class hs extends wt {
            constructor(t, n) {
                if (void 0 === e) 
                    throw new TypeError(
                        "Bootstrap's tooltips require Popper (https://popper.js.org)"
                    );
                super(t, n),
                this._isEnabled = !0,
                this._timeout = 0,
                this._isHovered = null,
                this._activeTrigger = {},
                this._popper = null,
                this._templateFactory = null,
                this._newContent = null,
                this.tip = null,
                this._setListeners(),
                this._config.selector || this._fixTitle()
            }
            static get Default() {
                return ds
            }
            static get DefaultType() {
                return us
            }
            static get NAME() {
                return "tooltip"
            }
            enable() {
                this._isEnabled = !0
            }
            disable() {
                this._isEnabled = !1
            }
            toggleEnabled() {
                this._isEnabled = !this._isEnabled
            }
            toggle() {
                this._isEnabled && (
                    this._activeTrigger.click = !this._activeTrigger.click,
                    this._isShown()
                        ? this._leave()
                        : this._enter()
                )
            }
            dispose() {
                clearTimeout(this._timeout),
                pt.off(this._element.closest(os), rs, this._hideModalHandler),
                this
                    ._element
                    .getAttribute("data-bs-original-title") && this
                    ._element
                    .setAttribute("title", this._element.getAttribute("data-bs-original-title")),
                this._disposePopper(),
                super.dispose()
            }
            show() {
                if ("none" === this._element.style.display) 
                    throw new Error("Please use show on visible elements");
                if (!this._isWithContent() || !this._isEnabled) 
                    return;
                const e = pt.trigger(this._element, this.constructor.eventName("show")),
                    t = (Fe(this._element) || this._element.ownerDocument.documentElement).contains(
                        this._element
                    );
                if (e.defaultPrevented || !t) 
                    return;
                this._disposePopper();
                const n = this._getTipElement();
                this
                    ._element
                    .setAttribute("aria-describedby", n.getAttribute("id"));
                const {container: i} = this._config;
                if (
                    this._element.ownerDocument.documentElement.contains(this.tip) || (i.append(n), pt.trigger(this._element, this.constructor.eventName("inserted"))),
                    this._popper = this._createPopper(n),
                    n.classList.add(ss),
                    "ontouchstart" in document.documentElement
                ) 
                    for (const e of[].concat(...document.body.children)) 
                        pt.on(e, "mouseover", Ye);
            this._queueCallback((() => {
                    pt.trigger(this._element, this.constructor.eventName("shown")),
                    !1 === this._isHovered && this._leave(),
                    this._isHovered = !1
                }), this.tip, this._isAnimated())
            }
            hide() {
                if (!this._isShown()) 
                    return;
                if (pt.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) 
                    return;
                if (
                    this._getTipElement().classList.remove(ss),
                    "ontouchstart" in document.documentElement
                ) 
                    for (const e of[].concat(...document.body.children)) 
                        pt.off(e, "mouseover", Ye);
            this._activeTrigger.click = !1,
                this._activeTrigger[ls] = !1,
                this._activeTrigger[as] = !1,
                this._isHovered = null;
                this._queueCallback((() => {
                    this._isWithActiveTrigger() || (
                        this._isHovered || this._disposePopper(),
                        this._element.removeAttribute("aria-describedby"),
                        pt.trigger(this._element, this.constructor.eventName("hidden"))
                    )
                }), this.tip, this._isAnimated())
            }
            update() {
                this._popper && this
                    ._popper
                    .update()
            }
            _isWithContent() {
                return Boolean(this._getTitle())
            }
            _getTipElement() {
                return this.tip || (
                    this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())
                ),
                this.tip
            }
            _createTipElement(e) {
                const t = this
                    ._getTemplateFactory(e)
                    .toHtml();
                if (!t) 
                    return null;
                t
                    .classList
                    .remove(is, ss),
                t
                    .classList
                    .add(`bs-${this.constructor.NAME}-auto`);
                const n = (e => {
                    do {
                        e += Math.floor(1e6 * Math.random())
                    } while (document.getElementById(e));
                    return e
                })(this.constructor.NAME).toString();
                return t.setAttribute("id", n),
                this._isAnimated() && t
                    .classList
                    .add(is),
                t
            }
            setContent(e) {
                this._newContent = e,
                this._isShown() && (this._disposePopper(), this.show())
            }
            _getTemplateFactory(e) {
                return this._templateFactory
                    ? this
                        ._templateFactory
                        .changeContent(e)
                    : this._templateFactory = new ts({
                        ...this._config,
                        content: e,
                        extraClass: this._resolvePossibleFunction(this._config.customClass)
                    }),
                this._templateFactory
            }
            _getContentForTemplate() {
                return {".tooltip-inner": this._getTitle()}
            }
            _getTitle() {
                return this._resolvePossibleFunction(this._config.title) || this
                    ._element
                    .getAttribute("data-bs-original-title")
            }
            _initializeOnDelegatedTarget(e) {
                return this
                    .constructor
                    .getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
            }
            _isAnimated() {
                return this._config.animation || this.tip && this
                    .tip
                    .classList
                    .contains(is)
            }
            _isShown() {
                return this.tip && this
                    .tip
                    .classList
                    .contains(ss)
            }
            _createPopper(e) {
                const t = "function" == typeof this._config.placement
                        ? this
                            ._config
                            .placement
                            .call(this, e, this._element)
                        : this._config.placement,
                    n = cs[t.toUpperCase()];
                return Le(this._element, e, this._getPopperConfig(n))
            }
            _getOffset() {
                const {offset: e} = this._config;
                return "string" == typeof e
                    ? e
                        .split(",")
                        .map((e => Number.parseInt(e, 10)))
                    : "function" == typeof e
                        ? t => e(t, this._element)
                        : e
            }
            _resolvePossibleFunction(e) {
                return "function" == typeof e
                    ? e.call(this._element)
                    : e
            }
            _getPopperConfig(e) {
                const t = {
                    placement: e,
                    modifiers: [
                        {
                            name: "flip",
                            options: {
                                fallbackPlacements: this._config.fallbackPlacements
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: this._getOffset()
                            }
                        }, {
                            name: "preventOverflow",
                            options: {
                                boundary: this._config.boundary
                            }
                        }, {
                            name: "arrow",
                            options: {
                                element: `.${this.constructor.NAME}-arrow`
                            }
                        }, {
                            name: "preSetPlacement",
                            enabled: !0,
                            phase: "beforeMain",
                            fn: e => {
                                this
                                    ._getTipElement()
                                    .setAttribute("data-popper-placement", e.state.placement)
                            }
                        }
                    ]
                };
                return {
                    ...t,
                    ..."function" == typeof this._config.popperConfig
                        ? this
                            ._config
                            .popperConfig(t)
                        : this._config.popperConfig
                }
            }
            _setListeners() {
                const e = this
                    ._config
                    .trigger
                    .split(" ");
                for (const t of e) 
                    if ("click" === t) 
                        pt.on(
                            this._element,
                            this.constructor.eventName("click"),
                            this._config.selector,
                            (e => {
                                this
                                    ._initializeOnDelegatedTarget(e)
                                    .toggle()
                            })
                        );
                    else if ("manual" !== t) {
                        const e = t === as
                                ? this
                                    .constructor
                                    .eventName("mouseenter")
                                : this
                                    .constructor
                                    .eventName("focusin"),
                            n = t === as
                                ? this
                                    .constructor
                                    .eventName("mouseleave")
                                : this
                                    .constructor
                                    .eventName("focusout");
                        pt.on(this._element, e, this._config.selector, (e => {
                            const t = this._initializeOnDelegatedTarget(e);
                            t._activeTrigger[
                                "focusin" === e.type
                                    ? ls
                                    : as
                            ] = !0,
                            t._enter()
                        })),
                        pt.on(this._element, n, this._config.selector, (e => {
                            const t = this._initializeOnDelegatedTarget(e);
                            t._activeTrigger[
                                "focusout" === e.type
                                    ? ls
                                    : as
                            ] = t
                                ._element
                                .contains(e.relatedTarget),
                            t._leave()
                        }))
                    }
                this._hideModalHandler = () => {
                    this._element && this.hide()
                },
                pt.on(this._element.closest(os), rs, this._hideModalHandler)
            }
            _fixTitle() {
                const e = this
                    ._element
                    .getAttribute("title");
                e && (
                    this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", e),
                    this._element.setAttribute("data-bs-original-title", e),
                    this._element.removeAttribute("title")
                )
            }
            _enter() {
                this._isShown() || this._isHovered
                    ? this._isHovered = !0
                    : (this._isHovered = !0, this._setTimeout((() => {
                        this._isHovered && this.show()
                    }), this._config.delay.show))
            }
            _leave() {
                this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout((() => {
                    this._isHovered || this.hide()
                }), this._config.delay.hide))
            }
            _setTimeout(e, t) {
                clearTimeout(this._timeout),
                this._timeout = setTimeout(e, t)
            }
            _isWithActiveTrigger() {
                return Object
                    .values(this._activeTrigger)
                    .includes(!0)
            }
            _getConfig(e) {
                const t = vt.getDataAttributes(this._element);
                for (const e of Object.keys(t)) 
                    ns.has(e) && delete t[e];
                return e = {
                    ...t,
                    ..."object" == typeof e && e
                        ? e
                        : {}
                },
                e = this._mergeConfigObj(e),
                e = this._configAfterMerge(e),
                this._typeCheckConfig(e),
                e
            }
            _configAfterMerge(e) {
                return e.container = !1 === e.container
                    ? document.body
                    : qe(e.container),
                "number" == typeof e.delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }),
                "number" == typeof e.title && (e.title = e.title.toString()),
                "number" == typeof e.content && (e.content = e.content.toString()),
                e
            }
            _getDelegateConfig() {
                const e = {};
                for (const t in this._config) 
                    this
                        .constructor
                        .Default[t] !== this
                        ._config[t] && (e[t] = this._config[t]);
                return e.selector = !1,
                e.trigger = "manual",
                e
            }
            _disposePopper() {
                this._popper && (this._popper.destroy(), this._popper = null),
                this.tip && (this.tip.remove(), this.tip = null)
            }
            static jQueryInterface(e) {
                return this.each((function () {
                    const t = hs.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e]) 
                            throw new TypeError(`No method named "${e}"`);
                        t[e]()
                    }
                }))
            }
        }
        Ve(hs);
        const ps = {
                ...hs.Default,
                content: "",
                offset: [
                    0, 8
                ],
                placement: "right",
                template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class' +
                        '="popover-header"></h3><div class="popover-body"></div></div>',
                trigger: "click"
            },
            fs = {
                ...hs.DefaultType,
                content: "(null|string|element|function)"
            };
        class gs extends hs {
            static get Default() {
                return ps
            }
            static get DefaultType() {
                return fs
            }
            static get NAME() {
                return "popover"
            }
            _isWithContent() {
                return this._getTitle() || this._getContent()
            }
            _getContentForTemplate() {
                return {".popover-header": this._getTitle(), ".popover-body": this._getContent()}
            }
            _getContent() {
                return this._resolvePossibleFunction(this._config.content)
            }
            static jQueryInterface(e) {
                return this.each((function () {
                    const t = gs.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e]) 
                            throw new TypeError(`No method named "${e}"`);
                        t[e]()
                    }
                }))
            }
        }
        Ve(gs);
        const ms = ".bs.scrollspy",
            bs = `activate${ms}`,
            _s = `click${ms}`,
            vs = `load${ms}.data-api`,
            ys = "active",
            ws = "[href]",
            Es = ".nav-link",
            ks = `${Es}, .nav-item > ${Es}, .list-group-item`,
            As = {
                offset: null,
                rootMargin: "0px 0px -25%",
                smoothScroll: !1,
                target: null,
                threshold: [.1, .5, 1]
            },
            Cs = {
                offset: "(number|null)",
                rootMargin: "string",
                smoothScroll: "boolean",
                target: "element",
                threshold: "array"
            };
        class Ts extends wt {
            constructor(e, t) {
                super(e, t),
                this._targetLinks = new Map,
                this._observableSections = new Map,
                this._rootElement = "visible" === getComputedStyle(this._element).overflowY
                    ? null
                    : this._element,
                this._activeTarget = null,
                this._observer = null,
                this._previousScrollData = {
                    visibleEntryTop: 0,
                    parentScrollTop: 0
                },
                this.refresh()
            }
            static get Default() {
                return As
            }
            static get DefaultType() {
                return Cs
            }
            static get NAME() {
                return "scrollspy"
            }
            refresh() {
                this._initializeTargetsAndObservables(),
                this._maybeEnableSmoothScroll(),
                this._observer
                    ? this
                        ._observer
                        .disconnect()
                    : this._observer = this._getNewObserver();
                for (const e of this._observableSections.values()) 
                    this
                        ._observer
                        .observe(e)
                }
            dispose() {
                this
                    ._observer
                    .disconnect(),
                super.dispose()
            }
            _configAfterMerge(e) {
                return e.target = qe(e.target) || document.body,
                e.rootMargin = e.offset
                    ? `${e.offset}px 0px -30%`
                    : e.rootMargin,
                "string" == typeof e.threshold && (
                    e.threshold = e.threshold.split(",").map((e => Number.parseFloat(e)))
                ),
                e
            }
            _maybeEnableSmoothScroll() {
                this._config.smoothScroll && (
                    pt.off(this._config.target, _s),
                    pt.on(this._config.target, _s, ws, (e => {
                        const t = this
                            ._observableSections
                            .get(e.target.hash);
                        if (t) {
                            e.preventDefault();
                            const n = this._rootElement || window,
                                i = t.offsetTop - this._element.offsetTop;
                            if (n.scrollTo) 
                                return void n.scrollTo({top: i, behavior: "smooth"});
                            n.scrollTop = i
                        }
                    }))
                )
            }
            _getNewObserver() {
                const e = {
                    root: this._rootElement,
                    threshold: this._config.threshold,
                    rootMargin: this._config.rootMargin
                };
                return new IntersectionObserver((e => this._observerCallback(e)), e)
            }
            _observerCallback(e) {
                const t = e => this
                        ._targetLinks
                        .get(`#${e.target.id}`),
                    n = e => {
                        this._previousScrollData.visibleEntryTop = e.target.offsetTop,
                        this._process(t(e))
                    },
                    i = (this._rootElement || document.documentElement).scrollTop,
                    s = i >= this._previousScrollData.parentScrollTop;
                this._previousScrollData.parentScrollTop = i;
                for (const o of e) {
                    if (!o.isIntersecting) {
                        this._activeTarget = null,
                        this._clearActiveClass(t(o));
                        continue
                    }
                    const e = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                    if (s && e) {
                        if (n(o), !i) 
                            return
                    } else 
                        s || e || n(o)
                }
            }
            _initializeTargetsAndObservables() {
                this._targetLinks = new Map,
                this._observableSections = new Map;
                const e = Dt.find(ws, this._config.target);
                for (const t of e) {
                    if (!t.hash || He(t)) 
                        continue;
                    const e = Dt.findOne(t.hash, this._element);
                    ze(e) && (
                        this._targetLinks.set(t.hash, t),
                        this._observableSections.set(t.hash, e)
                    )
                }
            }
            _process(e) {
                this._activeTarget !== e && (
                    this._clearActiveClass(this._config.target),
                    this._activeTarget = e,
                    e.classList.add(ys),
                    this._activateParents(e),
                    pt.trigger(this._element, bs, {relatedTarget: e})
                )
            }
            _activateParents(e) {
                if (e.classList.contains("dropdown-item")) 
                    Dt
                        .findOne(".dropdown-toggle", e.closest(".dropdown"))
                        .classList
                        .add(ys);
                else 
                    for (const t of Dt.parents(e, ".nav, .list-group")) 
                        for (const e of Dt.prev(t, ks)) 
                            e
                                .classList
                                .add(ys)
                }
            _clearActiveClass(e) {
                e
                    .classList
                    .remove(ys);
                const t = Dt.find(`${ws}.${ys}`, e);
                for (const e of t) 
                    e
                        .classList
                        .remove(ys)
                }
            static jQueryInterface(e) {
                return this.each((function () {
                    const t = Ts.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) 
                            throw new TypeError(`No method named "${e}"`);
                        t[e]()
                    }
                }))
            }
        }
        pt.on(window, vs, (() => {
            for (const e of Dt.find('[data-bs-spy="scroll"]')) 
                Ts.getOrCreateInstance(e)
        })),
        Ve(Ts);
        const xs = ".bs.tab",
            Ss = `hide${xs}`,
            Ds = `hidden${xs}`,
            Os = `show${xs}`,
            Ls = `shown${xs}`,
            Ms = `click${xs}`,
            $s = `keydown${xs}`,
            Is = `load${xs}`,
            Ns = "ArrowLeft",
            js = "ArrowRight",
            Ps = "ArrowUp",
            Bs = "ArrowDown",
            qs = "active",
            zs = "fade",
            Hs = "show",
            Fs = ":not(.dropdown-toggle)",
            Ys = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
            Zs = `${ `.nav-link${Fs}, .list-group-item${Fs}, [role="tab"]${Fs}`}, ${Ys}`,
            Ws = `.${qs}[data-bs-toggle="tab"], .${qs}[data-bs-toggle="pill"], .${qs}[data-bs-toggle="list"]`;
        class Rs extends wt {
            constructor(e) {
                super(e),
                this._parent = this
                    ._element
                    .closest('.list-group, .nav, [role="tablist"]'),
                this._parent && (
                    this._setInitialAttributes(this._parent, this._getChildren()),
                    pt.on(this._element, $s, (e => this._keydown(e)))
                )
            }
            static get NAME() {
                return "tab"
            }
            show() {
                const e = this._element;
                if (this._elemIsActive(e)) 
                    return;
                const t = this._getActiveElem(),
                    n = t
                        ? pt.trigger(t, Ss, {relatedTarget: e})
                        : null;
                pt
                    .trigger(e, Os, {relatedTarget: t})
                    .defaultPrevented || n && n.defaultPrevented || (
                        this._deactivate(t, e),
                        this._activate(e, t)
                    )
            }
            _activate(e, t) {
                if (!e) 
                    return;
                e
                    .classList
                    .add(qs),
                this._activate(je(e));
                this._queueCallback((() => {
                    "tab" === e.getAttribute("role")
                        ? (
                            e.removeAttribute("tabindex"),
                            e.setAttribute("aria-selected", !0),
                            this._toggleDropDown(e, !0),
                            pt.trigger(e, Ls, {relatedTarget: t})
                        )
                        : e
                            .classList
                            .add(Hs)
                }), e, e.classList.contains(zs))
            }
            _deactivate(e, t) {
                if (!e) 
                    return;
                e
                    .classList
                    .remove(qs),
                e.blur(),
                this._deactivate(je(e));
                this._queueCallback((() => {
                    "tab" === e.getAttribute("role")
                        ? (
                            e.setAttribute("aria-selected", !1),
                            e.setAttribute("tabindex", "-1"),
                            this._toggleDropDown(e, !1),
                            pt.trigger(e, Ds, {relatedTarget: t})
                        )
                        : e
                            .classList
                            .remove(Hs)
                }), e, e.classList.contains(zs))
            }
            _keydown(e) {
                if (![Ns, js, Ps, Bs].includes(e.key)) 
                    return;
                e.stopPropagation(),
                e.preventDefault();
                const t = [js, Bs].includes(e.key),
                    n = Qe(this._getChildren().filter((e => !He(e))), e.target, t, !0);
                n && (n.focus({
                    preventScroll: !0
                }), Rs.getOrCreateInstance(n).show())
            }
            _getChildren() {
                return Dt.find(Zs, this._parent)
            }
            _getActiveElem() {
                return this
                    ._getChildren()
                    .find((e => this._elemIsActive(e))) || null
            }
            _setInitialAttributes(e, t) {
                this._setAttributeIfNotExists(e, "role", "tablist");
                for (const e of t) 
                    this._setInitialAttributesOnChild(e)
            }
            _setInitialAttributesOnChild(e) {
                e = this._getInnerElement(e);
                const t = this._elemIsActive(e),
                    n = this._getOuterElement(e);
                e.setAttribute("aria-selected", t),
                n !== e && this._setAttributeIfNotExists(n, "role", "presentation"),
                t || e.setAttribute("tabindex", "-1"),
                this._setAttributeIfNotExists(e, "role", "tab"),
                this._setInitialAttributesOnTargetPanel(e)
            }
            _setInitialAttributesOnTargetPanel(e) {
                const t = je(e);
                t && (
                    this._setAttributeIfNotExists(t, "role", "tabpanel"),
                    e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `#${e.id}`)
                )
            }
            _toggleDropDown(e, t) {
                const n = this._getOuterElement(e);
                if (!n.classList.contains("dropdown")) 
                    return;
                const i = (e, i) => {
                    const s = Dt.findOne(e, n);
                    s && s
                        .classList
                        .toggle(i, t)
                };
                i(".dropdown-toggle", qs),
                i(".dropdown-menu", Hs),
                n.setAttribute("aria-expanded", t)
            }
            _setAttributeIfNotExists(e, t, n) {
                e.hasAttribute(t) || e.setAttribute(t, n)
            }
            _elemIsActive(e) {
                return e
                    .classList
                    .contains(qs)
            }
            _getInnerElement(e) {
                return e.matches(Zs)
                    ? e
                    : Dt.findOne(Zs, e)
            }
            _getOuterElement(e) {
                return e.closest(".nav-item, .list-group-item") || e
            }
            static jQueryInterface(e) {
                return this.each((function () {
                    const t = Rs.getOrCreateInstance(this);
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) 
                            throw new TypeError(`No method named "${e}"`);
                        t[e]()
                    }
                }))
            }
        }
        pt.on(document, Ms, Ys, (function (e) {
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
            He(this) || Rs
                .getOrCreateInstance(this)
                .show()
        })),
        pt.on(window, Is, (() => {
            for (const e of Dt.find(Ws)) 
                Rs.getOrCreateInstance(e)
        })),
        Ve(Rs);
        const Js = ".bs.toast",
            Vs = `mouseover${Js}`,
            Us = `mouseout${Js}`,
            Ks = `focusin${Js}`,
            Qs = `focusout${Js}`,
            Xs = `hide${Js}`,
            Gs = `hidden${Js}`,
            eo = `show${Js}`,
            to = `shown${Js}`,
            no = "hide",
            io = "show",
            so = "showing",
            oo = {
                animation: "boolean",
                autohide: "boolean",
                delay: "number"
            },
            ro = {
                animation: !0,
                autohide: !0,
                delay: 5e3
            };
        class ao extends wt {
            constructor(e, t) {
                super(e, t),
                this._timeout = null,
                this._hasMouseInteraction = !1,
                this._hasKeyboardInteraction = !1,
                this._setListeners()
            }
            static get Default() {
                return ro
            }
            static get DefaultType() {
                return oo
            }
            static get NAME() {
                return "toast"
            }
            show() {
                if (pt.trigger(this._element, eo).defaultPrevented) 
                    return;
                this._clearTimeout(),
                this._config.animation && this
                    ._element
                    .classList
                    .add("fade");
                this
                    ._element
                    .classList
                    .remove(no),
                Ze(this._element),
                this
                    ._element
                    .classList
                    .add(io, so),
                this._queueCallback((() => {
                    this
                        ._element
                        .classList
                        .remove(so),
                    pt.trigger(this._element, to),
                    this._maybeScheduleHide()
                }), this._element, this._config.animation)
            }
            hide() {
                if (!this.isShown()) 
                    return;
                if (pt.trigger(this._element, Xs).defaultPrevented) 
                    return;
                this
                    ._element
                    .classList
                    .add(so),
                this._queueCallback((() => {
                    this
                        ._element
                        .classList
                        .add(no),
                    this
                        ._element
                        .classList
                        .remove(so, io),
                    pt.trigger(this._element, Gs)
                }), this._element, this._config.animation)
            }
            dispose() {
                this._clearTimeout(),
                this.isShown() && this
                    ._element
                    .classList
                    .remove(io),
                super.dispose()
            }
            isShown() {
                return this
                    ._element
                    .classList
                    .contains(io)
            }
            _maybeScheduleHide() {
                this._config.autohide && (
                    this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
                        this.hide()
                    }), this._config.delay))
                )
            }
            _onInteraction(e, t) {
                switch (e.type) {
                    case "mouseover":
                    case "mouseout":
                        this._hasMouseInteraction = t;
                        break;
                    case "focusin":
                    case "focusout":
                        this._hasKeyboardInteraction = t
                }
                if (t) 
                    return void this._clearTimeout();
                const n = e.relatedTarget;
                this._element === n || this
                    ._element
                    .contains(n) || this._maybeScheduleHide()
            }
            _setListeners() {
                pt.on(this._element, Vs, (e => this._onInteraction(e, !0))),
                pt.on(this._element, Us, (e => this._onInteraction(e, !1))),
                pt.on(this._element, Ks, (e => this._onInteraction(e, !0))),
                pt.on(this._element, Qs, (e => this._onInteraction(e, !1)))
            }
            _clearTimeout() {
                clearTimeout(this._timeout),
                this._timeout = null
            }
            static jQueryInterface(e) {
                return this.each((function () {
                    const t = ao.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e]) 
                            throw new TypeError(`No method named "${e}"`);
                        t[e](this)
                    }
                }))
            }
        }
        Et(ao),
        Ve(ao),
        window.Alert = Tt,
        window.Button = St,
        window.Carousel = ln,
        window.Collapse = En,
        window.Dropdown = Jn,
        window.Modal = Si,
        window.Offcanvas = Ri,
        window.Popover = gs,
        window.ScrollSpy = Ts,
        window.Tab = Rs,
        window.Toast = ao,
        window.Tooltip = hs;
        r(4931),
        r(5692),
        r(4748),
        r(8290);
        var lo = r(2233),
            co = r(3646);
        const uo = document.querySelectorAll('[data-toggle="wizard"]');
        uo.length && uo.forEach((e => {
            let t = new Tab(e);
            e.addEventListener("click", (e => {
                e.preventDefault(),
                document
                    .querySelector(`[data-bs-target="${t._element.hash}"]`)
                    .click()
            })),
            document
                .querySelector(`[data-bs-target="${t._element.hash}"]`)
                .addEventListener("shown.bs.tab", (e => {
                    const t = lo.Z(e.target.parentNode);
                    co
                        .Z(e.target.parentNode)
                        .forEach((e => {
                            e
                                .classList
                                .remove("visited")
                        })),
                    t.forEach((e => {
                        e
                            .classList
                            .add("visited")
                    })),
                    e
                        .target
                        .parentNode
                        .classList
                        .remove("visited")
                }))
        }));
        r(8939),
        r(2106),
        r(6752),
        r(7517),
        r(3493),
        r(6001),
        r(7143),
        r(9723),
        r(4690);
        var ho = r(3517);
        const po = document.querySelectorAll("[data-select]"),
            fo = document.querySelectorAll(".needs-validation");
        po.length && r
            .e(462)
            .then(r.t.bind(r, 4183, 23))
            .then((({default: e}) => {
                po.forEach((t => {
                    const n = t.dataset.select
                        ? JSON.parse(t.dataset.select)
                        : {};
                    let i = t.dataset.optionTemplate,
                        s = t.dataset.itemTemplate;
                    const o = {
                        maxOptions: null,
                        onChange: function () {
                            this
                                .wrapper
                                .classList
                                .toggle("is-invalid", !this.isValid)
                        },
                        ...{
                            render: i
                                ? {
                                    option
                                    : (e, t) => i.replace(/\[\[.+?\]\]/g, (n => t(e[ho.Z(n, "[[", "]]")]))),
                                    item: (e, t) => s.replace(/\[\[.+?\]\]/g, (n => t(e[ho.Z(n, "[[", "]]")])))
                                }
                                : null
                        },
                        ...n
                    };
                    let r = new e(t, o);
                    fo.length && fo.forEach((e => {
                        e.addEventListener("submit", (t => {
                            r
                                .wrapper
                                .classList
                                .toggle("is-invalid", !r.isValid),
                            e.checkValidity() || (t.preventDefault(), t.stopPropagation()),
                            e
                                .classList
                                .add("was-validated")
                        }), !1)
                    }))
                })),
                window.TomSelect = e
            }))
            .catch(console.warn);
        r(5719),
        r(5835),
        r(9499),
        r(5078),
        r(2040);
        var go = r(258),
            mo = r(7617);
        const bo = go.Z("--prefix"),
            _o = document.getElementById("salesChart");
        _o && r
            .e(427)
            .then(r.bind(r, 6329))
            .then((() => {
                new Chart(_o, {
                    type: "bar",
                    data: {
                        labels: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec"
                        ],
                        datasets: [
                            {
                                label: "Projections",
                                data: [
                                    12440,
                                    15021,
                                    10081,
                                    10984,
                                    8409,
                                    12532,
                                    13986,
                                    19227,
                                    12636,
                                    10171,
                                    6753,
                                    15589
                                ],
                                backgroundColor: go.Z(`${bo}primary`)
                            }, {
                                label: "Actual",
                                data: [
                                    12357,
                                    13665,
                                    9071,
                                    9914,
                                    5115,
                                    12291,
                                    10010,
                                    19092,
                                    11976,
                                    9174,
                                    5189,
                                    14523
                                ],
                                backgroundColor: go.Z(`${bo}light`),
                                borderRadius: 30
                            }
                        ]
                    },
                    options: {
                        scales: {
                            x: {
                                stacked: !0,
                                gridLines: {
                                    display: !1
                                }
                            },
                            y: {
                                stacked: !0,
                                ticks: {
                                    callback: (e, t, n) => e > 0
                                        ? "$" + (
                                            e < 1e6
                                                ? Math.floor(e / 1e3) + "k"
                                                : Math.floor(e / 1e6) + "M"
                                        )
                                        : e
                                }
                            }
                        },
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: e => new Intl
                                        .NumberFormat("en-US", {
                                            style: "currency",
                                            currency: "USD"
                                        })
                                        .format(e.parsed.y),
                                    labelColor: e => ({backgroundColor: e.dataset.backgroundColor})
                                }
                            }
                        }
                    }
                })
            }))
            .catch(console.warn);
        const vo = document.getElementById("incomeChart");
        vo && r
            .e(427)
            .then(r.bind(r, 6329))
            .then((() => {
                new Chart(vo, {
                    type: "line",
                    data: {
                        labels: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec"
                        ],
                        datasets: [
                            {
                                backgroundColor: e => {
                                    const t = e.chart, {
                                            ctx: n,
                                            chartArea: i
                                        } = t;
                                    return i
                                        ? mo.Z(
                                            n,
                                            i,
                                            `rgba(${go.Z(`${bo}primary-rgb`)}, 0.5)`,
                                            `rgba(${go.Z(`${bo}primary-rgb`)}, 0.2)`,
                                            `rgba(${go.Z(`${bo}primary-rgb`)}, 0)`
                                        )
                                        : null
                                },
                                data: [
                                    400,
                                    1e3,
                                    1e3,
                                    2500,
                                    3e3,
                                    1500,
                                    4e3,
                                    5e3,
                                    8e3,
                                    6e3,
                                    5500,
                                    6500
                                ]
                            }
                        ]
                    },
                    options: {
                        layout: {
                            padding: {
                                top: 2,
                                bottom: -10
                            }
                        },
                        scales: {
                            x: {
                                ticks: {
                                    display: !1
                                },
                                grid: {
                                    drawOnChartArea: !0
                                }
                            },
                            y: {
                                display: !1
                            }
                        },
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: e => new Intl
                                        .NumberFormat("en-US", {
                                            style: "currency",
                                            currency: "USD"
                                        })
                                        .format(e.parsed.y)
                                }
                            }
                        }
                    }
                })
            }))
            .catch(console.warn);
        const yo = document.getElementById("pageViewsChart");
        yo && r
            .e(427)
            .then(r.bind(r, 6329))
            .then((() => {
                new Chart(yo, {
                    type: "bar",
                    data: {
                        labels: [
                            "1 May, 2022",
                            "5 May, 2022",
                            "10 May, 2022",
                            "15 May, 2022",
                            "20 May, 2022",
                            "25 May, 2022",
                            "30 May, 2022"
                        ],
                        datasets: [
                            {
                                label: "Projections",
                                data: [
                                    17,
                                    20,
                                    24,
                                    34,
                                    12,
                                    10,
                                    8
                                ],
                                backgroundColor: go.Z(`${bo}light`),
                                borderRadius: 30
                            }
                        ]
                    },
                    options: {
                        hoverBackgroundColor: go.Z(`${bo}primary`),
                        barThickness: 7,
                        scales: {
                            x: {
                                display: !1
                            },
                            y: {
                                display: !1
                            }
                        },
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: e => e.parsed.y + "%",
                                    labelColor: e => ({
                                        backgroundColor: go.Z(`${bo}primary`)
                                    })
                                }
                            }
                        }
                    }
                })
            }))
            .catch(console.warn);
        const wo = document.getElementById("orderStatusChart");
        wo && r
            .e(427)
            .then(r.bind(r, 6329))
            .then((() => {
                new Chart(wo, {
                    type: "roundedDoughnut",
                    data: {
                        labels: [
                            "Delivered", "In progress", "To-do"
                        ],
                        datasets: [
                            {
                                label: "Order status",
                                data: [
                                    29, 45, 26
                                ],
                                backgroundColor: [
                                    go.Z(`${bo}primary`),
                                    go.Z(`${bo}dark`),
                                    go.Z(`${bo}gray-300`)
                                ]
                            }
                        ]
                    },
                    options: {
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: e => e.parsed + "%"
                                }
                            }
                        }
                    }
                })
            }))
            .catch(console.warn);
        const Eo = document.getElementById("salesReportChart");
        Eo && r
            .e(427)
            .then(r.bind(r, 6329))
            .then((() => {
                new Chart(Eo, {
                    type: "line",
                    data: {
                        labels: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec"
                        ],
                        datasets: [
                            {
                                label: "Income",
                                data: [
                                    28,
                                    70,
                                    68,
                                    77,
                                    35,
                                    24,
                                    18,
                                    73,
                                    29,
                                    43,
                                    19,
                                    24
                                ],
                                borderWidth: 4,
                                borderColor: go.Z(`${bo}primary`)
                            }, {
                                label: "Expense",
                                data: [
                                    18,
                                    23,
                                    79,
                                    37,
                                    19,
                                    45,
                                    55,
                                    72,
                                    79,
                                    57,
                                    32,
                                    59
                                ],
                                borderWidth: 4,
                                borderColor: go.Z(`${bo}dark`),
                                hidden: !0
                            }
                        ]
                    },
                    options: {
                        scales: {
                            y: {
                                ticks: {
                                    callback: (e, t, n) => e > 0
                                        ? "$" + e + "k"
                                        : e
                                }
                            }
                        },
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: e => new Intl
                                        .NumberFormat("en-US", {
                                            style: "currency",
                                            currency: "USD"
                                        })
                                        .format(e.parsed.y)
                                }
                            }
                        }
                    }
                })
            }))
            .catch(console.warn);
        const ko = document.getElementById("currentBalanceChart");
        ko && r
            .e(427)
            .then(r.bind(r, 6329))
            .then((() => {
                new Chart(ko, {
                    type: "line",
                    data: {
                        labels: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec"
                        ],
                        datasets: [
                            {
                                backgroundColor: e => {
                                    const t = e.chart, {
                                            ctx: n,
                                            chartArea: i
                                        } = t;
                                    return i
                                        ? mo.Z(
                                            n,
                                            i,
                                            `rgba(${go.Z(`${bo}white-rgb`)}, 0.6)`,
                                            `rgba(${go.Z(`${bo}white-rgb`)}, 0.3)`,
                                            `rgba(${go.Z(`${bo}white-rgb`)}, 0)`
                                        )
                                        : null
                                },
                                borderWidth: 3,
                                borderColor: go.Z(`${bo}white`),
                                data: [
                                    400,
                                    1e3,
                                    1e3,
                                    2500,
                                    3e3,
                                    1500,
                                    4e3,
                                    5e3,
                                    8e3,
                                    6e3,
                                    5500,
                                    6500
                                ]
                            }
                        ]
                    },
                    options: {
                        layout: {
                            padding: {
                                top: 2,
                                bottom: -10
                            }
                        },
                        scales: {
                            x: {
                                ticks: {
                                    display: !1
                                }
                            },
                            y: {
                                display: !1
                            }
                        },
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: e => new Intl
                                        .NumberFormat("en-US", {
                                            style: "currency",
                                            currency: "USD"
                                        })
                                        .format(e.parsed.y),
                                    labelColor: e => ({
                                        backgroundColor: go.Z(`${bo}light`)
                                    })
                                }
                            }
                        }
                    }
                })
            }))
            .catch(console.warn);
        const Ao = document.getElementById("profileCompletionChart");
        Ao && r
            .e(427)
            .then(r.bind(r, 6329))
            .then((() => {
                new Chart(Ao, {
                    type: "roundedDoughnut",
                    data: {
                        labels: [
                            "Completed", "Not completed"
                        ],
                        datasets: [
                            {
                                data: [
                                    75, 25
                                ],
                                backgroundColor: [
                                    go.Z(`${bo}primary`),
                                    go.Z(`${bo}light`)
                                ]
                            }
                        ]
                    },
                    options: {
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: e => e.parsed + "%"
                                }
                            }
                        }
                    }
                })
            }))
            .catch(console.warn);
        const Co = document.getElementById("worldMap");
        Co && r
            .e(82)
            .then(r.bind(r, 2613))
            .then((({mapDefaultOptions: e}) => {
                const t = [
                        {
                            coords: [
                                -33.8481643, 150.7915504
                            ],
                            name: "Sydney",
                            description: "Hello this is Sydney"
                        }, {
                            coords: [
                                40.7127837, -74.0059413
                            ],
                            name: "New York",
                            description: "Welcom from Sydney"
                        }, {
                            coords: [
                                34.052235, -118.243683
                            ],
                            name: "Los Angeles",
                            description: "Hurray LA!"
                        }, {
                            coords: [
                                51.507351, -.127758
                            ],
                            name: "London"
                        }, {
                            coords: [
                                19.0822375, 72.8109751
                            ],
                            name: "Mumbai"
                        }
                    ],
                    n = {
                        selector: Co,
                        markers: t,
                        onMarkerTooltipShow(e, n, i) {
                            n
                                .getElement()
                                .innerHTML = `${n
                                .text()}<br/>${t[i]
                                .description || ""}`
                        }
                    },
                    i = {
                        ...e,
                        ...n
                    };
                new jsVectorMap(i)
            }))
            .catch(console.warn);
        const To = document.getElementById("totalSalesChart");
        To && r
            .e(427)
            .then(r.bind(r, 6329))
            .then((() => {
                new Chart(To, {
                    type: "line",
                    data: {
                        labels: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec"
                        ],
                        datasets: [
                            {
                                backgroundColor: e => {
                                    const t = e.chart, {
                                            ctx: n,
                                            chartArea: i
                                        } = t;
                                    return i
                                        ? mo.Z(
                                            n,
                                            i,
                                            `rgba(${go.Z(`${bo}success-rgb`)}, 0.3)`,
                                            `rgba(${go.Z(`${bo}success-rgb`)}, 0.1)`,
                                            `rgba(${go.Z(`${bo}success-rgb`)}, 0)`
                                        )
                                        : null
                                },
                                borderWidth: 3,
                                borderColor: go.Z(`${bo}success`),
                                data: [
                                    400,
                                    1e3,
                                    1e3,
                                    2500,
                                    3e3,
                                    1500,
                                    4e3,
                                    5e3,
                                    8e3,
                                    6e3,
                                    5500,
                                    6500
                                ],
                                tension: 0
                            }
                        ]
                    },
                    options: {
                        layout: {
                            padding: {
                                top: 2,
                                bottom: -10
                            }
                        },
                        scales: {
                            x: {
                                ticks: {
                                    display: !1
                                },
                                grid: {
                                    drawOnChartArea: !0
                                }
                            },
                            y: {
                                display: !1
                            }
                        },
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: e => new Intl
                                        .NumberFormat("en-US", {
                                            style: "currency",
                                            currency: "USD"
                                        })
                                        .format(e.parsed.y),
                                    labelColor: e => ({backgroundColor: e.dataset.borderColor})
                                }
                            }
                        }
                    }
                })
            }))
            .catch(console.warn);
        const xo = document.getElementById("totalExpenseChart");
        xo && r
            .e(427)
            .then(r.bind(r, 6329))
            .then((() => {
                new Chart(xo, {
                    type: "line",
                    data: {
                        labels: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec"
                        ],
                        datasets: [
                            {
                                backgroundColor: e => {
                                    const t = e.chart, {
                                            ctx: n,
                                            chartArea: i
                                        } = t;
                                    return i
                                        ? mo.Z(
                                            n,
                                            i,
                                            `rgba(${go.Z(`${bo}danger-rgb`)}, 0.3)`,
                                            `rgba(${go.Z(`${bo}danger-rgb`)}, 0.1)`,
                                            `rgba(${go.Z(`${bo}danger-rgb`)}, 0)`
                                        )
                                        : null
                                },
                                borderWidth: 3,
                                borderColor: go.Z(`${bo}danger`),
                                data: [
                                    9932,
                                    7384,
                                    6673,
                                    4500,
                                    3834,
                                    1222,
                                    2127,
                                    3384,
                                    2992,
                                    5383,
                                    1923,
                                    2537
                                ],
                                tension: 0
                            }
                        ]
                    },
                    options: {
                        layout: {
                            padding: {
                                top: 2,
                                bottom: -10
                            }
                        },
                        scales: {
                            x: {
                                ticks: {
                                    display: !1
                                },
                                grid: {
                                    drawOnChartArea: !0
                                }
                            },
                            y: {
                                display: !1
                            }
                        },
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: e => new Intl
                                        .NumberFormat("en-US", {
                                            style: "currency",
                                            currency: "USD"
                                        })
                                        .format(e.parsed.y),
                                    labelColor: e => ({backgroundColor: e.dataset.borderColor})
                                }
                            }
                        }
                    }
                })
            }))
            .catch(console.warn);
        const So = document.getElementById("overviewChart");
        So && r
            .e(427)
            .then(r.bind(r, 6329))
            .then((() => {
                new Chart(So, {
                    type: "line",
                    data: {
                        labels: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec"
                        ],
                        datasets: [
                            {
                                label: "Expected",
                                data: [
                                    9440,
                                    18021,
                                    34081,
                                    43804,
                                    30409,
                                    22532,
                                    21986,
                                    27227,
                                    32636,
                                    30171,
                                    32753,
                                    19589
                                ],
                                borderColor: go.Z(`${bo}primary`),
                                pointRadius: 4,
                                pointBorderWidth: 3,
                                pointBorderColor: go.Z(`${bo}primary`),
                                pointBackgroundColor: go.Z(`${bo}white`),
                                pointHoverRadius: 4,
                                pointHoverBorderWidth: 3,
                                pointHoverBorderColor: go.Z(`${bo}primary`),
                                pointHoverBackgroundColor: go.Z(`${bo}primary`),
                                tension: 0
                            }, {
                                label: "Actual",
                                data: [
                                    2440,
                                    9247,
                                    23081,
                                    30839,
                                    39923,
                                    36532,
                                    28386,
                                    34227,
                                    38636,
                                    37171,
                                    25753,
                                    25589
                                ],
                                borderWidth: 2,
                                borderDash: [
                                    5, 5
                                ],
                                borderColor: `rgba(${go.Z(`${bo}blue-rgb`)}, 0.75)`,
                                pointBackgroundColor: go.Z(`${bo}blue`),
                                tension: 0
                            }
                        ]
                    },
                    options: {
                        scales: {
                            x: {
                                gridLines: {
                                    display: !1
                                }
                            },
                            y: {
                                ticks: {
                                    callback: (e, t, n) => e > 0
                                        ? "$" + (
                                            e < 1e6
                                                ? Math.floor(e / 1e3) + "k"
                                                : Math.floor(e / 1e6) + "M"
                                        )
                                        : e
                                }
                            }
                        },
                        plugins: {
                            tooltip: {
                                mode: "index",
                                callbacks: {
                                    label: e => new Intl
                                        .NumberFormat("en-US", {
                                            style: "currency",
                                            currency: "USD"
                                        })
                                        .format(e.parsed.y),
                                    labelColor: e => ({backgroundColor: e.dataset.borderColor})
                                }
                            },
                            mouseLine: {
                                enabled: !0
                            }
                        }
                    }
                })
            }))
            .catch(console.warn);
        const Do = document.getElementById("emailActivityChart");
        Do && Promise
            .all([
                r
                    .e(427)
                    .then(r.bind(r, 6329))
            ])
            .then((() => {
                new Chart(Do, {
                    type: "pie",
                    data: {
                        labels: [
                            "Opened ", "Clicked", "Bounce", "Spam"
                        ],
                        datasets: [
                            {
                                data: [
                                    49, 22, 13, 5
                                ],
                                backgroundColor: [
                                    `rgba(${go.Z(`${bo}info-rgb`)}, 0.9)`,
                                    `rgba(${go.Z(`${bo}success-rgb`)}, 0.9)`,
                                    `rgba(${go.Z(`${bo}warning-rgb`)}, 0.9)`,
                                    `rgba(${go.Z(`${bo}danger-rgb`)}, 0.9)`
                                ]
                            }
                        ]
                    },
                    options: {
                        plugins: {
                            legend: {
                                display: !0,
                                position: "bottom",
                                align: "center"
                            }
                        }
                    }
                })
            }))
            .catch(console.warn);
        const Oo = document.getElementById("revenueChart");
        Oo && r
            .e(427)
            .then(r.bind(r, 6329))
            .then((() => {
                new Chart(Oo, {
                    type: "line",
                    data: {
                        labels: [
                            "Jan 2020",
                            "Feb 2020",
                            "Mar 2020",
                            "Apr 2020",
                            "May 2020",
                            "Jun 2020",
                            "Jul 2020",
                            "Aug 2020",
                            "Sep 2020",
                            "Oct 2020",
                            "Nov 2020",
                            "Dec 2020",
                            "Jan 2021",
                            "Feb 2021",
                            "Mar 2021",
                            "Apr 2021",
                            "May 2021",
                            "Jun 2021",
                            "Jul 2021",
                            "Aug 2021",
                            "Sep 2021",
                            "Oct 2021",
                            "Nov 2021",
                            "Dec 2021",
                            "Jan 2022",
                            "Feb 2022",
                            "Mar 2022",
                            "Apr 2022",
                            "May 2022",
                            "Jun 2022",
                            "Jul 2022",
                            "Aug 2022",
                            "Sep 2022",
                            "Oct 2022",
                            "Nov 2022",
                            "Dec 2022"
                        ],
                        datasets: [
                            {
                                label: "Revenue",
                                data: [
                                    1534797,
                                    1807907,
                                    2991201,
                                    3206722,
                                    3400109,
                                    4490270,
                                    4811541,
                                    5079186,
                                    5416371,
                                    5445881,
                                    5285721,
                                    5625865,
                                    6689399,
                                    7659140,
                                    8811657,
                                    8960763,
                                    9335633,
                                    9518522,
                                    10975742,
                                    12644259,
                                    13035177,
                                    13337221,
                                    14407691,
                                    15102984,
                                    15140604,
                                    15498567,
                                    15582300,
                                    16034956,
                                    15600252,
                                    17132937,
                                    17277658,
                                    17985396,
                                    19104049,
                                    19606166,
                                    19641876,
                                    19987294
                                ],
                                borderWidth: 2,
                                borderColor: go.Z(`${bo}blue`),
                                backgroundColor: e => {
                                    const t = e.chart, {
                                            ctx: n,
                                            chartArea: i
                                        } = t;
                                    return i
                                        ? mo.Z(
                                            n,
                                            i,
                                            `rgba(${go.Z(`${bo}blue-rgb`)}, 0.3)`,
                                            `rgba(${go.Z(`${bo}blue-rgb`)}, 0.15)`,
                                            `rgba(${go.Z(`${bo}blue-rgb`)}, 0.05)`
                                        )
                                        : null
                                },
                                pointBackgroundColor: go.Z(`${bo}blue`),
                                tension: 0
                            }
                        ]
                    },
                    options: {
                        scales: {
                            x: {
                                display: !1
                            },
                            y: {
                                ticks: {
                                    maxTicksLimit: 10,
                                    callback: (e, t, n) => e > 0
                                        ? "$" + (
                                            e < 1e6
                                                ? Math.floor(e / 1e3) + "k"
                                                : Math.floor(e / 1e6) + "M"
                                        )
                                        : e
                                }
                            }
                        },
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: e => new Intl
                                        .NumberFormat("en-US", {
                                            style: "currency",
                                            currency: "USD"
                                        })
                                        .format(e.parsed.y),
                                    labelColor: e => 0 === e.datasetIndex
                                        ? {
                                            backgroundColor: e.dataset.borderColor
                                        }
                                        : {
                                            backgroundColor: e.dataset.backgroundColor
                                        }
                                }
                            }
                        }
                    }
                })
            }))
            .catch(console.warn);
        const Lo = document.getElementById("volumeChart");
        Lo && r
            .e(427)
            .then(r.bind(r, 6329))
            .then((() => {
                new Chart(Lo, {
                    type: "bar",
                    data: {
                        labels: [
                            "Jan 2020",
                            "Feb 2020",
                            "Mar 2020",
                            "Apr 2020",
                            "May 2020",
                            "Jun 2020",
                            "Jul 2020",
                            "Aug 2020",
                            "Sep 2020",
                            "Oct 2020",
                            "Nov 2020",
                            "Dec 2020",
                            "Jan 2021",
                            "Feb 2021",
                            "Mar 2021",
                            "Apr 2021",
                            "May 2021",
                            "Jun 2021",
                            "Jul 2021",
                            "Aug 2021",
                            "Sep 2021",
                            "Oct 2021",
                            "Nov 2021",
                            "Dec 2021",
                            "Jan 2022",
                            "Feb 2022",
                            "Mar 2022",
                            "Apr 2022",
                            "May 2022",
                            "Jun 2022",
                            "Jul 2022",
                            "Aug 2022",
                            "Sep 2022",
                            "Oct 2022",
                            "Nov 2022",
                            "Dec 2022"
                        ],
                        datasets: [
                            {
                                label: "Volume",
                                data: [
                                    62818,
                                    41778,
                                    48100,
                                    106833,
                                    189364,
                                    152544,
                                    203980,
                                    218007,
                                    269406,
                                    290798,
                                    357599,
                                    323096,
                                    307246,
                                    375954,
                                    408444,
                                    368624,
                                    529254,
                                    594473,
                                    514196,
                                    456412,
                                    428602,
                                    535077,
                                    628141,
                                    602323,
                                    564725,
                                    648952,
                                    690027,
                                    796537,
                                    876486,
                                    961475,
                                    816575,
                                    861616,
                                    912809,
                                    869996,
                                    904038,
                                    981902
                                ],
                                backgroundColor: go.Z(`${bo}primary`),
                                barThickness: 10
                            }
                        ]
                    },
                    options: {
                        scales: {
                            y: {
                                ticks: {
                                    maxTicksLimit: 10,
                                    callback: (e, t, n) => e > 0
                                        ? "$" + (
                                            e < 1e6
                                                ? Math.floor(e / 1e3) + "k"
                                                : Math.floor(e / 1e6) + "M"
                                        )
                                        : e
                                }
                            }
                        },
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: e => new Intl
                                        .NumberFormat("en-US", {
                                            style: "currency",
                                            currency: "USD"
                                        })
                                        .format(e.parsed.y),
                                    labelColor: e => ({backgroundColor: e.dataset.backgroundColor})
                                }
                            }
                        }
                    }
                })
            }))
            .catch(console.warn)
        })()
})();