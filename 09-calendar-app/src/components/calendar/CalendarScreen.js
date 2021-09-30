import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import { messages } from './../helpers/calendar-messages-es';

import { Navbar } from './../ui/Navbar';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from './../../actions/ui';
import { eventSetActive } from '../../actions/events';
import { AddNewFav } from './../ui/AddNewFav';
import { DeleteEventFav } from './../ui/DeleteEventFav';
import { eventClearActiveEvent } from './../../actions/events';

moment.locale('es');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector((state) => state.calendar);

    const [lastView, setLastView] = useState(
        localStorage.getItem('lastView') || 'month'
    );

    const onDoubleClick = () => {
        dispatch(uiOpenModal());
    };

    const onSelectEvent = (e) => {
        dispatch(eventSetActive(e));
    };

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    };

    const onSelectSlot = (e) => {
        dispatch(eventClearActiveEvent());
        dispatch(uiOpenModal());
    };

    const eventStylerGetter = (event, start, end, isSelected) => {
        const style = {
            background: '#367CF7',
            bordiusRadius: '0px',
            opacity: 0.8,
            dispaly: 'block',
            color: '#fff',
        };

        return {
            style,
        };
    };

    return (
        <div className='calendar-screen'>
            <Navbar />
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor='start'
                endAccessor='end'
                style={{ height: 700 }}
                messages={messages}
                eventPropGetter={eventStylerGetter}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                view={lastView}
                onSelectSlot={onSelectSlot}
                selectable={true}
                components={{
                    event: CalendarEvent,
                }}
            />

            <AddNewFav />

            {activeEvent && <DeleteEventFav id={activeEvent.id} />}

            <CalendarModal />
        </div>
    );
};
